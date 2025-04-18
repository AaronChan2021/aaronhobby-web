'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 从 localStorage 获取用户信息和 token
    const token = localStorage.getItem('token')
    const userStr = localStorage.getItem('user')

    if (!token || !userStr) {
      // 如果没有登录，重定向到登录页
      router.push('/login')
      return
    }

    try {
      const userData = JSON.parse(userStr)
      setUser(userData)
    } catch (error) {
      console.error('Error parsing user data:', error)
      router.push('/login')
    } finally {
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    // 清除本地存储的用户信息和 token
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // 重定向到登录页
    router.push('/login')
  }

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600'></div>
      </div>
    )
  }

  if (!user) {
    return null // 或者显示错误信息
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        {/* 顶部导航栏 */}
        <div className='bg-white shadow-sm rounded-lg p-4 mb-8 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900'>个人信息</h1>
          <button
            onClick={handleLogout}
            className='cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            退出登录
          </button>
        </div>

        {/* 用户信息卡片 */}
        <div className='bg-white shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='space-y-6'>
              {/* 头像 */}
              <div className='flex justify-center'>
                <div className='h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center'>
                  <span className='text-3xl font-medium text-indigo-600'>
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* 用户信息 */}
              <div className='space-y-4'>
                <div className='border-b border-gray-200 pb-4'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    基本信息
                  </h3>
                  <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        用户名
                      </label>
                      <div className='mt-1'>
                        <p className='text-sm text-gray-900'>{user.name}</p>
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        邮箱地址
                      </label>
                      <div className='mt-1'>
                        <p className='text-sm text-gray-900'>{user.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 账户安全 */}
                <div>
                  <h3 className='text-lg font-medium text-gray-900'>
                    账户安全
                  </h3>
                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => router.push('/change-password')}
                    >
                      修改密码
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
