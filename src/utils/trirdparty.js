import * as Sentry from '@sentry/browser';
import { trirdparty } from '../../etc/config';
import { version } from '../../package.json';

export function init() {
	Sentry.init({
		dsn: trirdparty.sentry,
		release: version,
	});	
}
