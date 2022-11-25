import { Share } from "react-native"

export const shareUrl = (title, link) => {
    Share.share({
        message : title,
        url : link
    })
}

