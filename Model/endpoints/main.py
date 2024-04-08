import pickle
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/ping")
async def ping():
    return "Hello, I am alive"


@app.post("/summary")
async def section(request: Request):

    data = await request.json()

    from summarize import summarize

    summary = summarize(data["country"], data["section"])

    return {"summary": summary}


@app.post("/qa")
async def section(request: Request):

    data = await request.json()

    from qa_v3 import answer
    answer = answer(data["Question"])

    return {"Answer": answer}
