import requests
import json
from requests import post

token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IklkVG9rZW5TaWduaW5LZXlDb250YWluZXIifQ.eyJ1aWQiOiIyMjAwMDAwMSIsIm5hbWUiOiJHYWxpZXUgZGEgR2FsaWxcdTAwZTlpYSIsImVtYWlsIjoibHVjYXNwaXF1ZXM3QGdtYWlsLmNvbSIsInVsdGltb19hY2Vzc28iOiIxMVwvMDFcLzIwMjIgMTA6MDQ6NDYiLCJmdW5jYW8iOiJBc3Ryb25vbW8iLCJzZXRvciI6Ik9ic2VydmF0b3JpbyBkZSB0dXJpbiIsImluc3RpdHVpY2FvIjoiVW5pdmVyc2lkYWRlIGRlIFRVUklOIiwidGlwbyI6Ik5hY2lvbmFsIiwidGFiZWxhc0F1dG9yaXphZGFzIjpbeyJ0YWJlbGEiOiJzb2xpY2l0YWNhbyIsIm9wZXJhY29lcyI6IlIifV0sInBlcmZpbCI6ImNsaWVudGVfYXBpXzIyMDIiLCJleHAiOjE2NDIwMDAwODgsIm5iZiI6MTY0MTkxMzY4OCwidmVyIjoiMS4wMCIsImlzcyI6Imh0dHA6XC9cL3RlbGVzc2F1ZGVhbS51ZWEuZWR1LmJyXC9BcHBfcHVibGljXC9hcGlcLyIsImF1dGhTdGFydFRpbWUiOiIxMVwvMDFcLzIwMjIgMTE6MDg6MDgiLCJhdXRoRW5kVGltZSI6IjEyXC8wMVwvMjAyMiAxMTowODowOCIsImlkcCI6InRlbGVzc2F1ZGVhbS51ZWEuZWR1LmJyIiwiYXVkIjoiVW5pdmVyc2lkYWRlIGRlIFRVUklOIiwiaXAiOiIxNzIuMTcuMTAxLjI1NSJ9.9NxrR866cbTFAVjZhpZOgV5jPTSOx-4Me7bQQHh6B2A'

had = {'Authorization': 'Bearer %s'  %token}

email = 'lucaspiques7@gmail.com'
senha = 'q123456'


#data = 'email=$+email+senha=$+senha'
data = {'email': email,
        'senha': senha
        }


url = 'http://172.17.100.60/ProjetosNAP/sapopemba-telessaude/App_public/api/solicitacao/reader_all'

response = requests.post(url, data=data, headers=had)

print(response.status_code)
print(response)
print(response.json())
