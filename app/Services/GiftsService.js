import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { giftApi } from "./AxiosService.js"


class GiftsService{
    async deleteGift(giftID) {
        let giftIndex = appState.gifts.findIndex(g => g.id == giftID)
        const res = await giftApi.delete(`/gifts/${giftID}`)
        appState.gifts.splice(giftIndex, 1)
        appState.emit('gifts')
    }
    async openGift(giftID) {
        debugger
        let gift = appState.gifts.find(g => g.id == giftID)
        let giftIndex = appState.gifts.findIndex(g => g.id == giftID)
        // @ts-ignore
        gift.opened = true
        const res = await giftApi.put(`/gifts/${gift?.id}` , gift)
        appState.gifts.splice(giftIndex, 1, res)
        appState.emit('gifts')
    }
    async handleGiftSubmit(formData) {
        let newGift = new Gift(formData)
        const res = await giftApi.post('/gifts', newGift)
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