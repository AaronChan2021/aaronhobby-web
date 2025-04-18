'use client'

export default function Test({}: //   children
{
  children: React.ReactNode
}) {
  return (
    <html lang='zh'>
      <body>
        <div className='min-h-screen'>
          {/* 顶部通知栏 */}
          <div className='bg-purple-50 text-center py-2'>
            <p>
              Learn front-end development with high quality, interactive courses
              from{' '}
              <a href='#' className='text-purple-600 hover:underline'>
                Scrimba
              </a>
              . Enroll now!
            </p>
          </div>

          {/* 导航栏 */}
          <nav className='border-b'>
            <div className='max-w-7xl mx-auto px-4 flex items-center justify-between h-16'>
              <div className='flex items-center space-x-8'>
                <a href='#' className='text-2xl font-bold'>
                  MDN Web Docs
                </a>
                <div className='hidden md:flex space-x-6'>
                  <a href='#' className='text-gray-600 hover:text-gray-900'>
                    References
                  </a>
                  <a href='#' className='text-gray-600 hover:text-gray-900'>
                    Learn
                  </a>
                  <a href='#' className='text-gray-600 hover:text-gray-900'>
                    Plus
                  </a>
                  <a href='#' className='text-gray-600 hover:text-gray-900'>
                    Curriculum
                    <span className='ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-600 rounded'>
                      NEW
                    </span>
                  </a>
                  <a href='#' className='text-gray-600 hover:text-gray-900'>
                    Blog
                  </a>
                  <a href='#' className='text-gray-600 hover:text-gray-900'>
                    Tools
                  </a>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <button className='p-2 rounded-full hover:bg-gray-100'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                  </svg>
                </button>
                <button className='p-2 rounded-full hover:bg-gray-100'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                  </svg>
                </button>
                <button className='text-gray-700 hover:text-gray-900'>
                  Log in
                </button>
                <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
                  Sign up for free
                </button>
              </div>
            </div>
          </nav>

          {/* 面包屑导航 */}
          <div className='bg-gray-50 border-b'>
            <div className='max-w-7xl mx-auto px-4 py-2'>
              <div className='flex items-center space-x-2 text-sm text-gray-600'>
                <a href='#' className='hover:text-gray-900'>
                  面向开发者的 Web 技术
                </a>
                <span>/</span>
                <a href='#' className='hover:text-gray-900'>
                  CSS: 层叠样式表
                </a>
                <span>/</span>
                <a href='#' className='hover:text-gray-900'>
                  CSS syntax
                </a>
                <span>/</span>
                <span className='text-gray-900'>At 规则</span>
              </div>
            </div>
          </div>

          {/* 主要内容区 */}
          <main className='max-w-7xl mx-auto px-4 py-8'>
            <div className='flex'>
              {/* 左侧边栏 */}
              <div className='w-64 flex-shrink-0'>
                <div className='sticky top-4'>
                  <button className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M3 4h18M3 12h18M3 20h18' />
                    </svg>
                    <span>Filter</span>
                  </button>

                  <nav className='mt-4 space-y-4'>
                    <div>
                      <h2 className='font-medium mb-2'>CSS</h2>
                      <div className='space-y-2'>
                        <a
                          href='#'
                          className='block text-sm text-gray-600 hover:text-gray-900'
                        >
                          初学者教程
                        </a>
                        <a
                          href='#'
                          className='block text-sm text-gray-600 hover:text-gray-900'
                        >
                          CSS 样式基础
                        </a>
                        <a
                          href='#'
                          className='block text-sm text-gray-600 hover:text-gray-900'
                        >
                          CSS 文本样式
                        </a>
                        <a
                          href='#'
                          className='block text-sm text-gray-600 hover:text-gray-900'
                        >
                          CSS 布局概述
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              {/* 主内容区 */}
              <div className='flex-1 ml-8'>
                <div className='bg-purple-100 p-4 rounded-lg mb-8'>
                  <p className='text-sm'>
                    此页面由社区从英文翻译而来。了解更多并加入 MDN Web Docs
                    社区。
                  </p>
                </div>

                <h1 className='text-4xl font-bold mb-8'>At 规则</h1>

                <div className='prose max-w-none'>
                  <p>
                    At 规则是一个 CSS 语句，用来指示 CSS 如何运行。以 at
                    符号开头，&apos;@&apos; (U+0040 COMMERCIAL
                    AT)，后跟一个标识符，并包括到下一个分号的所有内容，&apos;;&apos;
                    (U+003B SEMICOLON)，或下一个 CSS 块，以先到者为准。
                  </p>
                </div>
              </div>

              {/* 右侧目录 */}
              <div className='w-64 flex-shrink-0 ml-8'>
                <div className='sticky top-4'>
                  <h2 className='font-medium mb-4'>在本文中</h2>
                  <nav className='space-y-2'>
                    <a
                      href='#'
                      className='block text-sm text-gray-600 hover:text-gray-900'
                    >
                      语法
                    </a>
                    <a
                      href='#'
                      className='block text-sm text-gray-600 hover:text-gray-900'
                    >
                      条件规则组
                    </a>
                    <a
                      href='#'
                      className='block text-sm text-gray-600 hover:text-gray-900'
                    >
                      使用 CSS 按套来嵌套 @layer
                    </a>
                    <a
                      href='#'
                      className='block text-sm text-gray-600 hover:text-gray-900'
                    >
                      索引
                    </a>
                    <a
                      href='#'
                      className='block text-sm text-gray-600 hover:text-gray-900'
                    >
                      规范
                    </a>
                    <a
                      href='#'
                      className='block text-sm text-gray-600 hover:text-gray-900'
                    >
                      参见
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
