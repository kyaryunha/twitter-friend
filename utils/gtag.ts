export const GA_TRACKING_ID = 'G-83QX7Q4VBS';
declare const window: Window &
    typeof globalThis & {
    FB: any
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url:any) => {
    (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type eventProps = {
    action: any,
    category: any,
    label: any,
    value: any,
};
export const event = ({action, category, label, value}: eventProps) => {
    (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};