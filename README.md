# restaurant-booking

เว็บไซต์ระบบจองโต๊ะร้านอาหาร (Frontend & Backend) ที่มาพร้อมระบบตรวจสอบเงื่อนไขวันเวลาการจองฝั่งหน้าบ้าน และเชื่อมต่อระบบส่งข้อมูลข้ามระบบแจ้งเตือนเข้าสู่แอปพลิเคชัน LINE (LINE Messaging API) ของทางร้านอาหารโดยตรงแบบ Real-time
-----> https://restaurant-booking-787w.vercel.app/

## 🌐 Live Demo & Deployment

*   **Frontend (หน้าบ้าน):** ปล่อยออนไลน์ผ่านบริกาารของ [Vercel](https://vercel.com) ⚡
*   **Backend (หลังบ้าน/API):** เปิดเซิร์ฟเวอร์รันระบบผ่านบริการของ [Render](https://render.com) 💻

---

## ✨ คุณสมบัติหลักของระบบ (Key Features)

*   **Frontend Validation (ตรรกะฝั่งหน้าบ้าน):** 
    *   ใช้ระบบล็อกวันที่ (HTML `min` Attribute) ห้ามลูกค้าเลือกวันย้อนหลังในอดีต
    *   ใช้ JavaScript ดักจับเหตุการณ์การเลือกเวลา (onChange Event) ล็อกให้จองได้เฉพาะในช่วงเวลาเปิด-ปิดของร้านเท่านั้น หากเลือกเวลานอกเหนือจากที่กำหนดระบบจะเตือนและล้างค่าทันที
*   **Real-time LINE Notification:** ระบบยิงข้อมูลการจองผ่านคำสั่ง `fetch()` ไปยังหลังบ้าน และหลังบ้านจะคุยกับ LINE Platforms เพื่อพิมพ์สรุปยอดคิวลงในกลุ่มไลน์ของพนักงานในร้านอาหารทันที ไม่ต้องเปิดเช็กอีเมลให้ยุ่งยาก
*   **Secure API Handling:** ปลอดภัยไร้ปัญหา CORS Error ด้วยการสร้างระบบหลังบ้าน (Express.js) ทำหน้าที่เป็นตัวกลาง (Proxy) รับส่งข้อมูลอย่างถูกต้องตามหลักความปลอดภัยสากล

---

## 🛠️ เทคโนโลยีที่เลือกใช้ (Tech Stack)

### 🎨 Frontend (หน้าบ้าน)
*   **HTML5 ** (การจัดหน้าจอด้วย Flexbox และ Grid รองรับขนาดหน้าจอมือถืออย่างสมบูรณ์)
*   **Pure JavaScript** (สำหรับการจัดการตรรกะ Form Validation และควบคุมคำสั่ง Fetch API)

### ⚙️ Backend (หลังบ้าน)
*   **Node.js & Express.js** (สำหรับทำระบบ Web API Server)
*   **CORS Package** (เปิดขอบเขตความปลอดภัยรองรับคำขอส่งข้อมูลจาก Vercel ไปยัง Render)
*   **LINE Messaging API** (ช่องทางท่อส่งข้อความเข้าสู่ระบบของ LINE)

---

## 📂 โครงสร้างโฟลเดอร์โปรเจกต์ (Folder Structure)

```text
├── frontend/             # โค้ดส่วนหน้าเว็บทั้งหมด (สำหรับ Deploy บน Vercel)
│   ├── index.html        # หน้าจอหลักของฟอร์มจองร้านอาหาร
│   └── app.js            # ตรรกะตรวจเช็กข้อมูลและ Fetch ไปหาหลังบ้าน
│   
│
└── ── server.js          # ไฟล์หลักเปิดเซิร์ฟเวอร์ Express.js
    ├── package.json      # ไฟล์คุมแพ็กเกจ (express, cors, ฯลฯ)
    └── .env     # ตัวอย่างการตั้งค่าตัวแปรสภาวะแวดล้อม (Token, ID)
```

---

## 🚀 ขั้นตอนการติดตั้งไปรันเองบนเครื่อง (Local Setup)

1. **คัดลอกคลังโค้ด (Clone Repository)**
   ```bash
   git clone https://github.com/Testerzopa/restaurant-booking.git
   cd ชื่อโฟลเดอร์โปรเจกต์
   ```

2. **ติดตั้งและรันฝั่งหลังบ้าน (Backend)**
   ```bash
   npm install
   node server.js
   ```

3. **รันฝั่งหน้าบ้าน (Frontend)**
   * สามารถเปิดไฟล์ `frontend/index.html` บนเบราว์เซอร์เพื่อเริ่มกรอกข้อมูลและทดสอบระบบได้ทันที!

---

## 👤 พัฒนาโดย (Author)
*   **Testerzopa** - Frontend Developer / Fullstack Learner
