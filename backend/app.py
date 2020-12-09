from flask import Flask, render_template
from flask_cors import CORS
import json
import requests
import csv
import json


app = Flask(__name__)
CORS(app)

def get_data_from_json():
    dict_data = requests.get('https://api.covid19india.org/data.json').json()

    case_ts = dict_data["cases_time_series"]
    tot_cases, deaths, reco, dailyConf, days = [], [], [], [], []

    for i in range(len(case_ts)):
        tot_cases.append(int(case_ts[i]["totalconfirmed"]))
        deaths.append(int(case_ts[i]["totaldeceased"]))
        reco.append(int(case_ts[i]["totalrecovered"]))
        dailyConf.append(int(case_ts[i]["dailyconfirmed"]))
        days.append(i+1)

    return tot_cases, deaths, reco, dailyConf, days, dailyConf[-1]


@app.route('/')
def home():
    return "Test..."

@app.route('/getdata')
def index():
    dat_tup = get_data_from_json()
    # print(conf[-1], death[-1], rec[-1])
    data ={
        "deaths": (dat_tup[1]),
        "totCases": (dat_tup[0]),
        "reco": (dat_tup[2]),
        "totalDeath": int(dat_tup[1][-1]),
        "totalInf": int(dat_tup[0][-1]),
        "totalRec": int(dat_tup[2][-1]),
        "dailyConf": (dat_tup[3]),
        "days": (dat_tup[4]),
        "lastChange": int(dat_tup[5])
    }
   # print(data)
    return json.dumps(data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, threaded=True)
    