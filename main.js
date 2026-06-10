const datePicker = document.getElementById('booking-date');
const today = new Date();

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มจาก 0 เลยต้อง +1
const dd = String(today.getDate()).padStart(2, '0');

const formattedToday = `${yyyy}-${mm}-${dd}`;

datePicker.min = formattedToday;
const timePicker = document.getElementById('booking-time');

// ตั้งเวลาเปิด-ปิดของร้าน
const openTime = "11:00";
const closeTime = "21:00";

timePicker.addEventListener('change', function() {
    const selectedTime = timePicker.value; // ค

    if (selectedTime < openTime || selectedTime > closeTime) {
        alert(`ขออภัยค่ะ ร้านเปิดให้บริการเวลา ${openTime} น. ถึง ${closeTime} น. เท่านั้น กรุณาเลือกเวลาใหม่นะคะ`);
        timePicker.value = "";
    }
});


const form = document.querySelector('.booking-form');
form.addEventListener('submit', async function(event) { 
    console.log("กด submit แล้ว")

    event.preventDefault(); 
    
    const finalDate = datePicker.value;
    const finalTime = timePicker.value;
    
    
    const messageText = `🚨 มีคิวจองโต๊ะใหม่!\n📅 วันที่: ${finalDate}\n⏰ เวลา: ${finalTime} น.`;

    try {
        
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
        console.error('เกิดข้อผิดพลาด:', error);
        alert('❌ ไม่สามารถเชื่อมต่อกับระบบจองได้ในขณะนี้');
    }
});
