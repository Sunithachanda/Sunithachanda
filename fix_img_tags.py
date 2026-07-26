from pathlib import Path

files = [Path('src/Sections/About.jsx'), Path('src/Sections/Hero.jsx')]
replacement = '                <img src="/sunitha.jpeg" alt="Sunitha Chanda" className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy" />'

for path in files:
    text = path.read_text(encoding='utf-8')
    token = '<img src="data:image/jpeg;base64,'
    try:
        start = text.index(token)
        end = text.index('/>', start) + 2
        text = text[:start] + replacement + text[end:]
        path.write_text(text, encoding='utf-8')
        print('fixed', path)
    except ValueError:
        print('no match', path)
