import { NativeNavigation } from 'app/navigation/native'
import { CommonProvider } from 'app/provider'

export default function App() {


    return (
      <CommonProvider>
        <NativeNavigation />
      </CommonProvider>
    )


}
