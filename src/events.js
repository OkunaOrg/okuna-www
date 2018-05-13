import mitt from "mitt";

const eventEmitter = mitt();

const eventsMap = {
    OPEN_MENU: 'openMenu',
    CLOSE_MENU: 'closeMenu'
};

export default {
    emitWantsToOpenMenu() {
        eventEmitter.emit(eventsMap.OPEN_MENU);
    },
    onWantsToOpenMenu(listener) {
        eventEmitter.on(eventsMap.OPEN_MENU, listener);
        return () => {
            return this.remove(eventsMap.OPEN_MENU, listener);
        }
    },
    emitWantsToCloseMenu() {
        eventEmitter.emit(eventsMap.CLOSE_MENU);
    },
    onWantsToCloseMenu(listener) {
        eventEmitter.on(eventsMap.CLOSE_MENU, listener);
        return () => {
            return this.remove(eventsMap.CLOSE_MENU, listener);
        }
    },
    remove(eventName, listener){
        eventEmitter.off(eventName, listener);
    }
}
