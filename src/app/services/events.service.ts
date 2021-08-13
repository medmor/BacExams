import { Injectable } from '@angular/core';

export type EventHandler = (...args: any[]) => any;
@Injectable({
    providedIn: 'root',
})
export class Events {
    static BACK_BUTTON_CLICK = 'back-button-event';
    private c = new Map<string, EventHandler[]>();

    constructor() { }

    subscribe(topic: any, ...handlers: EventHandler[]) {
        let topics = this.c.get(topic);
        if (!topics) {
            this.c.set(topic, topics = []);
        }
        topics.push(...handlers);
    }


    unsubscribe(topic: string, handler?: EventHandler): boolean {
        if (!handler) {
            return this.c.delete(topic);
        }

        const topics = this.c.get(topic);
        if (!topics) {
            return false;
        }

        // We need to find and remove a specific handler
        const index = topics.indexOf(handler);

        if (index < 0) {
            // Wasn't found, wasn't removed
            return false;
        }
        topics.splice(index, 1);
        if (topics.length === 0) {
            this.c.delete(topic);
        }
        return true;
    }

    publish(topic: string, ...args: any[]): any[] | null {
        const topics = this.c.get(topic);
        if (!topics) {
            return null;
        }
        return topics.map(handler => {
            try {
                return handler(...args);
            } catch (e) {
                console.error(e);
                return null;
            }
        });
    }
}