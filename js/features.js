document.getElementById('btn-donation')
    .addEventListener('click', function () {
        showSectionById('show-donation');
        document.getElementById('btn-donation').classList.add("bg-[#B4F461]")
        document.getElementById('btn-history').classList.remove("bg-[#B4F461]")
    })

// history show
document.getElementById('btn-history')
    .addEventListener('click', function () {
        showSectionById('show-history');
        document.getElementById('btn-donation').classList.remove("bg-[#B4F461]")
        document.getElementById('btn-history').classList.add("bg-[#B4F461]")
    })




