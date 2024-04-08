#### Installing required module
# API Token key
import os 

os.environ['OPENAI_API_KEY'] = os.environ["openai"]


# Importing the modules.
from langchain.llms import OpenAI
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import ConversationalRetrievalChain


#### Preparing the documents
# Loading documents
pdf_folder_path = 'data'
os.listdir(pdf_folder_path)
# Reading the pdf files.

document=[]
for file in os.listdir(pdf_folder_path):
    if file.endswith(".pdf"):
        pdf_path=os.path.join(pdf_folder_path, file)
        loader=PyPDFLoader(pdf_path)
        document.extend(loader.load())


#### Splitting the documents into chunks
# Using character text splitter to split the documents into chunks
# I have adjusted the chunk_size from 3000 to 1000 and chunk_overlap from 100 to 50
document_splitter=CharacterTextSplitter(separator='\n', chunk_size=1000, chunk_overlap=50)
document_chunks=document_splitter.split_documents(document)
# Checking the number of documents chunks generated
len(document_chunks)


#### Embeddings
# select which embeddings we want to use
embeddings = OpenAIEmbeddings()


#### Creating a vector store
# create the vectorestore to use as the index
db = Chroma.from_documents(document_chunks, embeddings, persist_directory='./database')
# expose this index in a retriever interface
retriever = db.as_retriever(search_type="similarity", search_kwargs={"k":2})


#### Loading the OpenAI model
from transformers import AutoTokenizer
model = "openai-gpt"
tokenizer = AutoTokenizer.from_pretrained(model)


def answer(question):
    # Create a chain to answer questions
    qa = ConversationalRetrievalChain.from_llm(OpenAI(), retriever)
    
    # Initialize an empty chat history
    chat_history = []
    
    # Run the chain with the question and the chat history
    result = qa({"question": question, "chat_history": chat_history})
    
    # Append the question and the answer to the chat history
    chat_history.append((question, result["answer"]))
    
    # Return the answer
    return result["answer"]

