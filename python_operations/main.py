from time import sleep
from threading import Thread


def task():
    print("Starting a task...")
    sleep(1)
    print("done...")


t1 = Thread(target=task)
t2 = Thread(target=task)

t1.start()
t2.start()

t1.join()
t2.join()
