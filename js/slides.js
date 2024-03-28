// الدالة الأم
function slider(name){
    // تعريف المتغير الأساسي وإسناد قيمة أولية له ومن خلال تغييرها في الدول السابقة سيتم التحكم في عرض الشرائح
    let slidePosition = 1;

    // دالة عرض الشريحة الأولى وإخفاء ما عداها
    function viewslide(n){   
        let slides = document.querySelectorAll("#"+name+" .slides")
        if(n > slides.length){slidePosition = 1};
        if(n < 1){slidePosition = slides.length};
        for( let i = 0; i < slides.length; i ++){
            slides[i].style.display = "none" 
        }
        slides[slidePosition - 1].style.display = "block";      
    }

    // استدعاء دالة عرض الشريحة الأولى للتنفيذ بعد إغلاقها والانتهاء من كتابتها
    viewslide(slidePosition)

    // دالة تحريك الشرائح وهي تستدعي الدالة السابقة وتغير قيمة معاملها
    function slideMover(n){
        viewslide(slidePosition += n)
    }
    
    // استدعاء أزرار التحريك
    let nextButton = document.querySelector("#"+ name +" .next");
    let prevButton = document.querySelector("#"+ name +" .prev");
  
    // إضافة الأحداث لأزار التحريك ودالة تستدعي دالة التحريك بعد إسناد قيمة لمعاملها
    nextButton.addEventListener("click", function(){
        slideMover(1)
    });
    prevButton.addEventListener("click", function(){
        slideMover(-1)
    });

}

// استدعاء الدالة الأم للتنفيذ بعد إغلاقها والانتهاء من كتابتها
slider("works");
slider("reviews")