#### Installing required module
# API Token key
import os 
# Getting the API_KEY.
os.environ['OPENAI_API_KEY'] = os.environ["openai"]
 
# imports
import os 
import openai
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.chains.question_answering import load_qa_chain



#### Embeddings
# select which embeddings we want to use
embeddings = OpenAIEmbeddings()

#### Creating a vector store
# Loading
db = Chroma(persist_directory='./database', embedding_function=embeddings)

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

