import cv2

# Yüz tanıma için cascade classifier yüklenir
face_cascade = cv2.CascadeClassifier("haarcascade.xml")

# Web kamerası açılır
cap = cv2.VideoCapture(0)

while True:
    # Her bir kare için yüz tanıma yapılır
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # Tanınan yüzler için dikdörtgen çizilir
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Görüntü ekranda gösterilir
    cv2.imshow("Face Detection", frame)

    # "q" tuşuna basılırsa döngüden çıkılır
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Kamerayı kapatır ve pencereleri kapatır
cap.release()
cv2.destroyAllWindows()
