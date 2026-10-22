from pathlib import Path
import re,json
root=Path(__file__).resolve().parents[1]
h=(root/'index.html').read_text().replace('>\\n<script defer src="/assets/study-refresh.js">','>\n<script defer src="/assets/study-refresh.js">').replace('</script>\\n</head>','</script>\n</head>')
(root/'index.html').write_text(h)
def css(m):
 return '<style>'+ (root/m[1].lstrip('/').split('?')[0]).read_text()+'</style>'
h=re.sub(r'<link\b[^>]*href="(/assets/[^\"]+\.css(?:\?[^\"]*)?)"[^>]*>',css,h)
def js(m):
 name=m[1].split('?')[0].lstrip('/')
 source=(root/name).read_text()
 if name.endswith('expansion.js'):
  source=source.replace("const contentUrl = new URL('expansion-content.json', script.src);",'const contentUrl = null;')
  data=(root/'assets/expansion-content.json').read_text()
  source=source.replace('fetch(contentUrl)','Promise.resolve({ok:true,json:async()=>('+data+')})')
 return '<script>'+source.replace('</script','<\\/script')+'</script>'
h=re.sub(r'<script\b[^>]*src="(/assets/[^\"]+)"[^>]*></script>',js,h)
# Inline application starts after root exists, preserving execution order.
scripts=re.findall(r'<script>.*?</script>',h,re.S)
h=re.sub(r'<script>.*?</script>','',h,flags=re.S)
h=h.replace('</body>','\n'+'\n'.join(scripts)+'\n</body>')
(root/'preview-terapia-ocupacional.html').write_text(h)
config={'framework':None,'installCommand':'echo "Site estatico sem dependencias"','buildCommand':'npm run build','outputDirectory':'dist','rewrites':[{'source':'/(.*)','destination':'/index.html'}],'git':{'deploymentEnabled':{'preview/to-resumos-aprofundados-2026-10-22':False}}}
(root/'vercel.json').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
print('Preview:',len(h),'bytes')
