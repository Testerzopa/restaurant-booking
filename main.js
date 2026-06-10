// ดึงธาตุ (Element) ช่องเลือกวันมาจาก HTML
const datePicker = document.getElementById('booking-date');

// หาเวลาปัจจุบันของเครื่องผู้ใช้
const today = new Date();

// แปลงฟอร์แมตให้เป็น YYYY-MM-DD ตามที่ระบบ HTML ต้องการ
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มจาก 0 เลยต้อง +1
const dd = String(today.getDate()).padStart(2, '0');

const formattedToday = `${yyyy}-${mm}-${dd}`;

// ใส่ค่า min ให้ช่องอินพุต -> ส่งผลให้วันก่อนหน้านี้กดเลือกไม่ได้ทันที
datePicker.min = formattedToday;


// ดึงธาตุช่องเลือกเวลามาจาก HTML
const timePicker = document.getElementById('booking-time');

// ตั้งเวลาเปิด-ปิดของร้าน (สมมติเปิด 11:00 ถึง 21:00)
const openTime = "11:00";
const closeTime = "21:00";

// ดักจับเมื่อผู้ใช้งานเลือกเวลาเสร็จแล้ว
timePicker.addEventListener('change', function() {
    const selectedTime = timePicker.value; // ค่าที่ได้จะเป็นฟอร์แมต "HH:MM" เช่น "10:30"

    // Logic เปรียบเทียบตัวอักษรเวลา (ตรงๆ ได้เลยเพราะฟอร์แมตเหมือนกัน)
    if (selectedTime < openTime || selectedTime > closeTime) {
        alert(`ขออภัยค่ะ ร้านเปิดให้บริการเวลา ${openTime} น. ถึง ${closeTime} น. เท่านั้น กรุณาเลือกเวลาใหม่นะคะ`);
        timePicker.value = ""; // ล้างค่าที่เลือกผิดออกให้กลายเป็นช่องว่างเหมือนเดิม
    }
});

// 1. ดึงธาตุฟอร์มมาจาก HTML
const form = document.querySelector('.booking-form');

// 2. สั่งให้ JavaScript รอฟังตอนกด "Submit"
form.addEventListener('submit', async function(event) { 
    console.log("กด submit แล้ว")

    event.preventDefault(); 
    
    const finalDate = datePicker.value;
    const finalTime = timePicker.value;
    
    // 2. จัดฟอร์แมตข้อความที่จะให้ไปเด้งใน LINE ของร้าน
    const messageText = `🚨 มีคิวจองโต๊ะใหม่!\n📅 วันที่: ${finalDate}\n⏰ เวลา: ${finalTime} น.`;

    try {
        // 4. ✨ [แก้ไขจุดผิด] เปลี่ยนมาใช้ URL ปลายทางของ API LINE ตัวเต็มอย่างถูกต้อง
        const response = await fetch('http://localhost:3000/booking', {
            method: 'POST',   
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: finalDate,
                time: finalTime
            })
        });

        alert('🎉 ระบบส่งข้อมูลการจองไปยังเซิร์ฟเวอร์ LINE เรียบร้อยแล้ว!');
        form.reset();

    } catch (error) {
        // ดักจับกรณีอินเทอร์เน็ตหลุด หรือยิงไปไม่ถึงเซิร์ฟเวอร์
        console.error('เกิดข้อผิดพลาด:', error);
        alert('❌ ไม่สามารถเชื่อมต่อกับระบบจองได้ในขณะนี้');
    }
});
