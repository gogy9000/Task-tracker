import { NativeNavigation } from 'app/navigation/native'
import { CommonProvider } from 'app/provider'
// import * as Sentry from 'sentry-expo'
//
// import * as Sentry from 'sentry-expo';
//
// Sentry.init({
//   dsn: 'https://d72942087a8d4358926ceb8f6911c65d@o4504042959601664.ingest.sentry.io/4504042970021888',
//   enableInExpoDevelopment: true,
//   debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
// });

export default function App() {


    return (
      <CommonProvider>
        <NativeNavigation />
      </CommonProvider>
    )


}
