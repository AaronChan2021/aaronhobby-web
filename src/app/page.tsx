import Link from 'next/link'

const Button = ({
  children,
  href
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <Link
      href={href}
      className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div>Home</div>
      <Button href='/login'>登录</Button>
      <Button href='/register'>注册</Button>
      <Button href='/userInfo'>用户信息</Button>
      <Button href='/test'>测试</Button>
    </div>
  )
}
