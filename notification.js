$(() => {
  const image = `https://media.istockphoto.com/id/493500643/vector/flat-bell-icon.jpg?s=612x612&w=0&k=20&c=NBbckYhbzX5w3TczhVme8V1FO5fVqbSb3RkNHc2-o4s=`;
  const dialog = `
    <div class="hl-popup">
        <div class="hl-popup-header">
            <h5>🎉 Unlock the Magic of Exclusive Offers! 🌟</h5>
            <button onclick="closeDialog()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" height="24px" width="24px">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>

        <div class="hl-popup-body">
            <img src="${image}"
                class="hl-popup-image" />
            <p>
                Hello VIP! 🌟 The hottest promotions and exclusive deals are about to drop, and we want to make sure
                you're in the front row. 🚀

                Hit that flaming button for a front-row seat to exclusive offers.
            </p>
        </div>

        <div class="hl-popup-footer">
            <button class="hl-link" onclick="closeDialog()">I don't want promotion.</button>
            <button class="hl-primary" onclick="confirmDialog()">YES!!!</button>
        </div>
    </div>
      `;

  $(dialog).appendTo($("body"));

  setTimeout(() => {
    $(".hl-popup").addClass("active");
  }, 5000);
});

const closeDialog = () => {
  $(".hl-popup").removeClass("active");
};
const confirmDialog = () => {
  $(".hl-popup").removeClass("active");
  console.log("Norifiation Accepted");
  // Confirm Action
};
