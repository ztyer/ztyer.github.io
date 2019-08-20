# -*- coding: UTF-8 -*-

import requests

url = "https://wis.qq.com/weather/common?source=pc&weather_type=observe%7Cforecast_1h%7Cforecast_24h%7Cindex%7Calarm%7Climit%7Ctips%7Crise&province=%E5%B9%BF%E4%B8%9C%E7%9C%81&city=%E6%B7%B1%E5%9C%B3%E5%B8%82&county=&callback=jQuery111308387126290356972_1566306702222&_=1566306702224"
r = requests.get(url)
print(r.text)
# 打开文件
fo = open("tianqi.json", "w")
print("文件名为: ", fo.name)

fo.write(r.text)

# 关闭文件
fo.close()
