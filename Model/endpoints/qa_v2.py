#### Installing required module
# API Token key
import os 
# Defining the Model name and getting the API_KEY.
os.environ['LANGCHAIN_OPENAI_MODEL'] = 'GPT-3.5 turbo' 
os.environ['OPENAI_API_KEY'] = os.environ["openai"]
 
# imports
import os 
import openai
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.document_loaders import PyPDFLoader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.chains.question_answering import load_qa_chain
from langchain.text_splitter import RecursiveCharacterTextSplitter


#### Preparing the documents
# Loading documents
pdf_folder_path = 'data'

# Reading the pdf files.
document=[]
for file in os.listdir(pdf_folder_path):
    if file.endswith(".pdf"):
        pdf_path=os.path.join(pdf_folder_path, file)
        loader=PyPDFLoader(pdf_path)
        document.extend(loader.load())


#### Splitting the documents into chunks

# Using recursive character text splitter to split the documents into chunks
document_splitter=RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200, separators=["\n\n", "\n", " "])

# Creating a variable , document_chunks, for holding the chunked documents.
document_chunks=document_splitter.split_documents(document)

#### Embeddings
# select which embeddings we want to use
embeddings = OpenAIEmbeddings()

#### Creating a vector store
# create the vectorestore to use as the index
db = Chroma.from_documents(document_chunks, embeddings)

# expose this index in a retriever interface
retriever = db.as_retriever(search_type="similarity", search_kwargs={"k":2})

# Loading the OpenAI model 
llm_model = ChatOpenAI(
    temperature=0, 
    openai_api_key=openai.api_key, 
    model="gpt-3.5-turbo")

# Create a chain to answer questions
chain = load_qa_chain(llm_model, chain_type = "stuff")

def answer(question, chat_history=[]):

    qa = ConversationalRetrievalChain.from_llm(llm_model, retriever, chain_type = "stuff")
    result = qa({"question": question, "chat_history": chat_history})
    return result["answer"]

