import { mount, StartClient } from "solid-start/entry-client";
import Tracker from '@openreplay/tracker';

const tracker = new Tracker({
  projectKey: "WJ7A1A1fqvasarIvxSDc",  
});
tracker.start();

mount(() => <StartClient />, document);
