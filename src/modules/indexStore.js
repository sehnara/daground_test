import linkStore from "./linkStore"
import youtubeStore from "./youtubeStore"
import jobStore from "./jobStore"
import insightStore from "./insightStore"

const indexStore = () => ({
    jobStore,
    insightStore,
    linkStore,
    youtubeStore
})

export default indexStore