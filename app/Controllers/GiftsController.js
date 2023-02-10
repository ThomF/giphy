import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawGifts(){
    let template = ''
    appState.gifts.forEach(g => template += g.giftTemplate)
    setHTML('Gifts', template)
}

export class GiftsController {

constructor(){
    console.log("yes")
    
    this.getGifts()
    appState.on('gifts', _drawGifts)

}

async getGifts(){
    try {
        await giftsService.getGifts()
    } catch (error) {
        console.error(error)
    }
}

async handleGiftSubmit(){
    event?.preventDefault()
    let form = event?.target
    let formData = getFormData(form)
    await giftsService.handleGiftSubmit(formData)
}

async openGift(giftID){
    await giftsService.openGift(giftID)
}

}