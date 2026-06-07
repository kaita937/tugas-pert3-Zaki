import Navigation from './components/Navigation'
import Header from './components/Header'
import FocusTimer from './components/FocusTimer'
import TodoList from './components/TodoList'
import QuickLinks from './components/QuickLinks'

function App() {
  return (
    <>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-secondary-container brutalist-border star-dec z-0 opacity-50 rotate-12"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-primary-container rounded-full brutalist-border z-0 opacity-20"></div>

      <Navigation />

      {/* Main Container */}
      <main className="max-w-container-max mx-auto px-gutter py-margin grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
        <Header />
        
        <FocusTimer />
        
        <TodoList />
        
        <QuickLinks />
      </main>
      
      {/* Spacer for mobile bottom nav */}
      <div className="h-24 md:hidden"></div>
    </>
  )
}

export default App
