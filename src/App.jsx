import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import HafalanPage from './pages/HafalanPage/Hafalanpage';
import ProgressPage from './pages/ProgressPage/ProgressPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NoutFoundPage/NoutFoundPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  const [hafalanList, setHafalanList] = useState([
    { id: 1, surah: 'Al-Fatihah', ayat: 7, selesai: false, progres: 0 },
    { id: 2, surah: 'Al-Ikhlas', ayat: 4, selesai: false, progres: 0 },
    { id: 3, surah: 'Al-Falaq', ayat: 5, selesai: false, progres: 0 },
    { id: 4, surah: 'An-Nas', ayat: 6, selesai: false, progres: 0 },
  ]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const tambahHafalan = (surah, ayat) => {
    const baru = { id: Date.now(), surah, ayat: Number(ayat), selesai: false, progres: 0 };
    setHafalanList([...hafalanList, baru]);
  };

  const hapusHafalan = (id) => {
    setHafalanList(hafalanList.filter(item => item.id !== id));
  };

  const toggleSelesai = (id) => {
    setHafalanList(hafalanList.map(item => {
      if (item.id === id) {
        const newProgres = item.selesai ? 0 : 100;
        return { ...item, selesai: !item.selesai, progres: newProgres };
      }
      return item;
    }));
  };

  const updateProgres = (id, progres) => {
    setHafalanList(hafalanList.map(item => {
      if (item.id === id) {
        const clampedProgres = Math.max(0, Math.min(100, progres));
        return {
          ...item,
          progres: clampedProgres,
          selesai: clampedProgres === 100
        };
      }
      return item;
    }));
  };

  const totalSurah = hafalanList.length;
  const selesaiSurah = hafalanList.filter(h => h.selesai).length;
  const totalAyat = hafalanList.reduce((acc, item) => acc + item.ayat, 0);
  const totalProgres = hafalanList.reduce((acc, item) => acc + item.progres, 0);
  const selesaiAyat = hafalanList.reduce((acc, item) => acc + (item.ayat * item.progres / 100), 0);
  const persentase = totalSurah === 0 ? 0 : Math.round((totalProgres / totalSurah));

  return (
    <HashRouter>
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  selesai={selesaiSurah}
                  total={totalSurah}
                  persentase={persentase}
                />
              }
            />
            <Route
              path="/hafalan"
              element={
                <HafalanPage
                  hafalanList={hafalanList}
                  onTambah={tambahHafalan}
                  onHapus={hapusHafalan}
                  onToggle={toggleSelesai}
                  onUpdateProgres={updateProgres}
                />
              }
            />
            <Route
              path="/progress"
              element={
                <ProgressPage
                  hafalanList={hafalanList}
                  totalAyat={totalAyat}
                  selesaiAyat={selesaiAyat}
                  persentase={persentase}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;