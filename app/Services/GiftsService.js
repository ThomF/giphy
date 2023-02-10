import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { giftApi } from "./AxiosService.js"


class GiftsService{
    async openGift(giftID) {
        debugger
        let gift = appState.gifts.find(g => g.id == giftID)
        // @ts-ignore
        gift.opened = true
        const res = giftApi.put(`/gifts/${gift?.id}` , gift)
    }
    async handleGiftSubmit(formData) {
        let newGift = new Gift(formData)
        const res = giftApi.post('/gifts', newGift)
        console.log(res)
    }
    async getGifts() {
        let res = await giftApi.get('/gifts')
        console.log('[DATA]',res.data)
        appState.gifts = res.data.map(g => new Gift(g))
        console.log(appState.gifts)
    }


}

export const giftsService = new GiftsService()