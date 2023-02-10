

export class Gift{

    constructor(data){
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = false
    }



    get giftTemplate(){
        return`
        <div class="col-4 py-4 pt-4">
        <div class="card elevation-1 h-100">
          <img src="${this.url ? this.url : 'https://www.freepnglogos.com/uploads/gift-png/gift-present-prize-icon-24.png'}" onclick="app.giftsController.openGift('${this.id}')">
          <div class="card-body d-flex flex-column justify-content-between">
            <span>${this.tag}</span>
            <button class="btn btn-danger" onclick="app.giftsController.deleteGift('${this.id}')">DESTROY GIFT</button>
          </div>
        </div>
      </div>
        `
    }

}