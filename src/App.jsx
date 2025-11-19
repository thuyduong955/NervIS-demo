import './App.css'
import { LessonLibraryPage } from './pages/LessonLibraryPage'
import { SidebarNav } from './components/SidebarNav'

function App() {
  return (
    <div className="app-shell">
      <SidebarNav />
      <main className="app-main">
        <LessonLibraryPage />
      </main>
    </div>
  )
}

export default App
