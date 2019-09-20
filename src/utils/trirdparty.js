import * as Sentry from '@sentry/browser';
import { trirdparty } from '../../etc/config';

export function init() {
	Sentry.init({ dsn: trirdparty.sentry });	
}
