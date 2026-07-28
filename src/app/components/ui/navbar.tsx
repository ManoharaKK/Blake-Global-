import React from 'react'

export default function NavBar() {
  const navHeight = 64
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: `${navHeight}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        zIndex: 1000,
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'saturate(180%) blur(6px)',
        boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ fontWeight: 700 }}>BlackeGlobal</div>
      <nav>
        <a href="#home" style={{ marginLeft: 16 }}>Home</a>
        <a href="#about" style={{ marginLeft: 16 }}>About</a>
        <a href="#contact" style={{ marginLeft: 16 }}>Contact</a>
      </nav>
    </header>
  )
}