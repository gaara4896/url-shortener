import { message } from 'antd'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { ServiceResolver } from '../api'



const Lenghten = () => {
  const router = useRouter()

  useEffect(() => {
    message.error("Invalid url")
    router.push('/')
  }, [])
  return <></>
}

Lenghten.getInitialProps = async (context: any) => {
  const api = ServiceResolver.apiResolver()
  const hash = context.query?.id

  if (hash && !Array.isArray(hash)) {
    try {
      const { data } = await api.getLongUrl(hash)
      context.res.setHeader("location", data.long_url);
      context.res.statusCode = 302;
      context.res.end();
    } catch (err) {}
  }

  return {}
}

export default Lenghten
