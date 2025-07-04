export interface IMessage {
    eventType: string;
    payload: Record<string, any>;
    metadata: {
        source: string;
        correlationId: string;
        timestamp: string;
    };
}