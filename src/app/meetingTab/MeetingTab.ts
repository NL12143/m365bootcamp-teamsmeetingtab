import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/meetingTab/index.html")
@PreventIframe("/meetingTab/config.html")
@PreventIframe("/meetingTab/remove.html")
export class MeetingTab {
}
