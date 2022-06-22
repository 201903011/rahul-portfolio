---
date: 4 May 2022
author: Rahul Gaikwad
link: https://github.com/201903011/water_app.git
---

### AUTOMATED WATER LEVEL MONITORING USING RASPBERRY PI


![](/images/portfolio/distance-iot/iot.png)
#### Overview
Our system is an initiative to help curb or at least reduce these water wastage and scarcity issues throughout the nation. Delhi Jal Board had taken a decision to punish the consumers for overflowing tanks. Water consumers who switch on their motors to fill their overhead tanks and then forget to switch them off have to pay the respective penalties 

<p align="center">
  <img src="/images/portfolio/distance-iot/1.png" />
</p>

#### Implementation Methodology
1. Creating Mongodb Atlas
2. Building  App with Flutter using broadcasting widgets
3. Streaming dummy values fetching from atlas and repaint in flutter app
4. Measuring Distance from Ultrasonic Sensor
5. Inserting Real Values from Raspberry using Ethernet

#### Circuit diagram
<p align="center">
  <img src="/images/portfolio/distance-iot/3.png" />
</p>

<p align="center">
  <img src="/images/portfolio/distance-iot/2.png" />
</p>

#### Code for distance measuring
```
import pymongo
import time
import random
import RPi.GPIO as GPIO
import time
TRIG=21
ECHO=20
GPIO.setmode(GPIO.BCM)
 
CONNECTION_STRING = "mongodb+srv://<user>:<password>@cluster0.gbcff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client['myFirstDatabase']
 
def measure_dis():
    print("distance measurement in progress")
    GPIO.setup(TRIG,GPIO.OUT)
    GPIO.setup(ECHO,GPIO.IN)
    GPIO.output(TRIG,False)
    print("waiting for sensor to settle")
    time.sleep(0.2)
    GPIO.output(TRIG,True)
    time.sleep(0.00001)
    GPIO.output(TRIG,False)
    while GPIO.input(ECHO)==0:
        pulse_start=time.time()
    while GPIO.input(ECHO)==1:
        pulse_end=time.time()
    pulse_duration=pulse_end-pulse_start
    distance=pulse_duration*17150
    distance=round(distance,2)
    print("distance:",distance,"cm")
    time.sleep(2)
    x = int(distance)
    if x > 150 :
        return 0
    y = x/1.5 -1
    if y > 100 :
        return 100
    return 100 - int(y)
 
def input_data():
    print("Running")
    data = {
        "name": "rasberryPiMachine0",
        "water_level": random.randint(0, 50),
        "motor_status": True,
    }
    collection_name = db["water_info"]
 
    if collection_name.count_documents({}) == 0:
        collection_name.insert_one(data)
    else:
        m1 = measure_dis()
        print(m1)
        collection_name.update_one({"name":"rasberryPiMachine0"}, {"$set": {"water_level": m1,}})
       
def motor_on():
    #motor on
    pass
 
       
def motor_off():
    #motor on
    pass
 
def motsta():
    collection_name = db["water_info"]
    return collection_name.find_one()['motor_status']
 
 
while(True):
    input_data()
    print(motsta())
    if motsta() :
      motor_on()
    else:
      motor_off()
    time.sleep(10)


```


