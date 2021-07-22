export const formatTime = (time: number) => {
    if((time / 3600) < 1) {
        if((time / 60) < 1) {
            return `${time} secs`
        } else {
            return `${Math.floor(time / 60)} mins ${time % 60} secs`;
        }
    } else {
        return `${Math.floor(time / 3600)} hours ${Math.floor((time % 3600) / 60)} mins ${(time % 3600) % 60} secs`;
    }
}