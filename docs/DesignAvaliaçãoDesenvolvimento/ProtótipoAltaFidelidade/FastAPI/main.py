from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import csv
import os
from typing import List, Dict, Any

app = FastAPI()

app.mount("/static", StaticFiles(directory="../CandContas/static"), name="static")
templates = Jinja2Templates(directory="../CandContas/templates")

os.makedirs("logs", exist_ok=True)

class EventLog(BaseModel):
    participantId: str
    startTime: int
    endTime: int | None = None
    events: List[Dict[str, Any]]

@app.get("/", response_class=HTMLResponse)
async def read_tcle(request: Request):
    return templates.TemplateResponse(request=request, name="tcle.html")

@app.get("/test", response_class=HTMLResponse)
async def read_test(request: Request):
    return templates.TemplateResponse(request=request, name="candcontas.html")

@app.get("/titulo-eleitor", response_class=HTMLResponse)
async def read_titulo_eleitor(request: Request):
    return templates.TemplateResponse(request=request, name="titulo_eleitor.html")

@app.post("/api/log-interaction")
async def log_interaction(log: EventLog):
    filename = f"logs/{log.participantId}.csv"
    file_exists = os.path.isfile(filename)
    
    with open(filename, mode="a", newline="", encoding="utf-8") as csvfile:
        fieldnames = ["participantId", "sessionStart", "sessionEnd", "timestamp", "type", "targetTag", "targetId", "targetClass", "x", "y", "key"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        if not file_exists:
            writer.writeheader()
            
        for event in log.events:
            writer.writerow({
                "participantId": log.participantId,
                "sessionStart": log.startTime,
                "sessionEnd": log.endTime,
                "timestamp": event.get("timestamp"),
                "type": event.get("type"),
                "targetTag": event.get("targetTag", ""),
                "targetId": event.get("targetId", ""),
                "targetClass": event.get("targetClass", ""),
                "x": event.get("x", ""),
                "y": event.get("y", ""),
                "key": event.get("key", "")
            })
    return {"status": "success"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
