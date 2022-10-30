import React, { useEffect } from 'react'
import { Api } from 'app/DAL/Api'
import { useRouter } from 'solito/router'


export function AuthRedirect<P>(WrappedComponent: React.ComponentType<P>) {
  const NavigationToLoginPage = (props: P) => {
    const { data: authData } = Api.useAuthMeQuery()
    const router = useRouter()
    useEffect(() => {
      if (authData && authData.resultCode !== 0) {
        router.push('/login')
      }
    }, [authData])
    return <WrappedComponent {...props} />
  }
  return NavigationToLoginPage
}