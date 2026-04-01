/* ─── TRANSLATIONS ─── */
const TRANSLATIONS = {

  en: {
    /* drag bar */
    'drag.colorful':      'colorful',
    'drag.without':       'without<br>color',
    'drag.text':          'drag',

    /* nav — homepage */
    'nav.work':           'Work',
    'nav.contact':        'Contact',

    /* nav — project pages */
    'back.link':          'All Work',

    /* hero */
    'hero.tag':           'Designer · Researcher · Maker',
    'hero.subtitle':      'Smart Textile · Wearable Tech · Design Tools · 3D',
    'hero.cta':           'View Work ↓',
    'hero.scroll':        'Scroll',

    /* work section */
    'work.num':           '01',
    'work.heading':       'Selected Work',

    /* project 1 — card */
    'p1.num':             '01',
    'p1.title':           'Smart Textile',
    'p1.desc':            'Research and development of intelligent fabric systems integrating sensors and responsive materials.',
    'p1.t1': 'Research',  'p1.t2': 'Hardware',    'p1.t3': 'Materials',
    'p1.expand':          'View Details',
    /* project 1 — panel */
    'p1.panel.tag':       '01 / Smart Textile',
    'p1.panel.desc':      'Research and development of intelligent fabric systems integrating sensors and responsive materials. Exploring the boundaries of traditional textiles with embedded technology.',
    'p1.panel.cta':       'View Full Project →',

    /* project 2 — card */
    'p2.num':             '02',
    'p2.title':           'Wearable Tech',
    'p2.desc':            'Designing wearable technology that merges fashion aesthetics with functional electronics.',
    'p2.t1': 'Design',    'p2.t2': 'Electronics', 'p2.t3': 'Fashion',
    'p2.expand':          'View Details',
    /* project 2 — panel */
    'p2.panel.tag':       '02 / Wearable Tech',
    'p2.panel.desc':      'Designing wearable technology that merges fashion aesthetics with functional electronics. Form meets function at the edge of the body.',
    'p2.panel.cta':       'View Full Project →',

    /* project 3 — card */
    'p3.num':             '03',
    'p3.title':           'Design Tools',
    'p3.desc':            'Open-source tools for designers working at the intersection of technology and craft.',
    'p3.t1': 'Open Source', 'p3.t2': 'Software', 'p3.t3': 'Tools',
    'p3.expand':          'View Details',
    /* project 3 — panel */
    'p3.panel.tag':       '03 / Design Tools',
    'p3.panel.desc':      'Open-source tools for designers working at the intersection of technology and craft. Built with and for the community.',
    'p3.panel.cta':       'View Full Project →',

    /* project 4 — card */
    'p4.num':             '04',
    'p4.title':           'Installation Design',
    'p4.desc':            'Large-scale interactive installations exploring the boundaries of physical and digital space.',
    'p4.t1': 'Installation', 'p4.t2': 'Interactive', 'p4.t3': 'Space',
    'p4.expand':          'View Details',
    /* project 4 — panel */
    'p4.panel.tag':       '04 / Installation Design',
    'p4.panel.desc':      'Large-scale interactive installations exploring the boundaries of physical and digital space. Immersive environments that respond to the body.',
    'p4.panel.cta':       'View Full Project →',

    /* project 5 — card */
    'p5.num':             '05',
    'p5.title':           'Ideas with AI',
    'p5.desc':            'Exploring creative possibilities at the intersection of artificial intelligence and design practice.',
    'p5.t1': 'AI',        'p5.t2': 'Experimental', 'p5.t3': 'Generative',
    'p5.expand':          'View Details',
    /* project 5 — panel */
    'p5.panel.tag':       '05 / Ideas with AI',
    'p5.panel.desc':      'Exploring creative possibilities at the intersection of artificial intelligence and design practice. Generative tools for speculative thinking.',
    'p5.panel.cta':       'View Full Project →',

    /* contact */
    'contact.num':        '02',
    'contact.heading':    "Let's Connect",
    'contact.desc':       'Open for collaborations, research partnerships, and conversations about the future of wearable technology.',

    /* footer */
    'footer.left':        '© 2025 MACA',
    'footer.right':       'Smart Textile · Wearable Tech · Design',

    /* ── SenSequins project page ── */
    'st.back':            'All Work',
    'st.badge':           'Research · UIST 2022',
    'st.num':             '01 / 05',
    'st.tagline':         'Smart Textile Using 3D Printed Conductive Sequins — expanding the design space of smart textiles from 2D to 2.5D through sequin embroidery and digital fabrication.',
    'st.meta.year.l':     'Year',       'st.meta.year.v':  '2022',
    'st.meta.auth.l':     'Authors',    'st.meta.auth.v':  'Hua Ma · Junichi Yamaoka',
    'st.meta.venue.l':    'Venue',      'st.meta.venue.v': 'UIST \'22, Bend OR, USA',
    'st.meta.cite.l':     'Citations',  'st.meta.cite.v':  '16',
    'st.pub.label':       'Publication',
    'st.pub.title':       'SenSequins: Smart Textile Using 3D Printed Conductive Sequins',
    'st.pub.authors':     'Authors: Hua Ma, Junichi Yamaoka — Keio University, Yokohama, Japan',
    'st.pub.venue':       'Venue: UIST \'22: The 35th Annual ACM Symposium on User Interface Software and Technology',
    'st.pub.date':        'Published: October 29 – November 2, 2022 · Bend, OR, USA · Article 111, 13 pages',
    'st.pub.funding':     'Funding: JST SPRING (JPMJSP2123) · ZOZO NEXT Inc., Japan',
    'st.abstract':        'We used traditional sequin embroidery as the basis and a 3D printer to expand the design space of sequin materials and structures — developing a new 2.5D smart conductive sequin textile with multiple sensing and interactions, alongside a customizing system for automated design and manufacturing.',
    'st.demo.label':      'Demo',
    'st.demo.caption':    'SenSequins allows users to design conductive sequins in software (a), assemble the textile with a 3D printer and sewing machine (b, c), and build applications such as motion sensing and posture detection (d).',
    'st.contrib.label':   'Contributions',
    'st.contrib.heading': 'What Makes SenSequins Different',
    'st.c1.title':        '2.5D Semi-Dimensional Structure',
    'st.c1.p1':           'Unlike flat smart textile circuits, SenSequins extends the structure from two-dimensional to three-dimensional through 3D printed conductive sequins. Each sequin acts as an independent design unit — adjustable in conductivity, shape, and arrangement.',
    'st.c1.p2':           'The special double-layer structure (base textile + sequins) releases the design and configuration space of electronic components far beyond what flat embroidery allows.',
    'st.c2.title':        'Modular & Disassemblable',
    'st.c2.p':            'Most smart textiles are difficult to modify during prototyping. SenSequins solves this by making sequins easily removable and replaceable — no special sewing skills required. Participants in user tests could complete full design iterations within a two-hour workshop.',
    'st.c3.title':        'Circuit by Flip',
    'st.c3.p':            'When sequins lie flat, they contact adjacent sequins to form a closed circuit. When touched and flipped, the circuit opens. By placing the hole at the center instead of the edge, sequins become bistable — acting like a slide switch that holds its state until manually returned.',
    'st.ds.label':        'Design Space',
    'st.ds.heading':      'Sequin Design Primitives',
    'st.ds.c1.title':     'Conductivity Control',
    'st.ds.c1.p1':        'Using Composite Conductive PLA (volume resistivity 30 Ω-cm), resistance can be tuned by changing sequin diameter, thickness, overlap ratio, and 3D printing fill rate. Smaller size, larger thickness, higher overlap, and lower fill rate all increase conductivity.',
    'st.ds.c1.p2':        'These parameters feed directly into the design software, showing estimated resistance values in real time as designers adjust dimensions.',
    'st.ds.c2.title':     'Sensing Modes',
    'st.ds.c2.p':         'Resistive: Detects contact between sequins via voltage divider circuit (Arduino Uno). Capacitive: Using 1–10 MΩ resistors, sequins can sense touch and proximity without contact. Bistable switch: Center-hole sequins latch in flipped position, acting as a slide switch. Locking structure: Textured stair-step tips allow sequins to bind together under pressure.',
    'st.sys.label':       'System',
    'st.sys.heading':     'Design Tool & Automated Manufacturing',
    'st.sys.s1.title':    'Design Software',
    'st.sys.s1.p1':       'Built in Rhinoceros + Grasshopper. Users prepare mesh data for the target surface, specify sequin diameter, thickness, hole position, and overlap. The tool automatically places sequins across the mesh and displays estimated resistance values in real time.',
    'st.sys.s1.p2':       'Output: STL file for 3D printing + SVG file for the sewing machine\'s positioning path.',
    'st.sys.s2.title':    'Automated Sewing',
    'st.sys.s2.p':        'Sequins are printed in horizontal rows with breakable supports between them. A computerized embroidery machine (Brother Parie-EMM1901) sews the sequins row by row using the SVG positioning file. After sewing, the supports are folded and snapped apart by hand.',
    'st.app.label':       'Applications',
    'st.app.heading':     'Prototypes',
    'st.app.a1.title':    'Body Movement Garment',
    'st.app.a1.p':        '84 modules (6×14 switch array) arranged across a two-layer garment (organza outer, cotton inner). Square fish-scale conductive sequins close circuits when the body moves — triggering NeoPixel LEDs on the reverse side. Visualized in real time via TouchDesigner. A dancer wore the garment and reported "it felt like talking to her own body."',
    'st.app.a2.title':    'Ankle Posture Detection',
    'st.app.a2.p':        'Curved 25 mm conductive sequins embroidered with rubber thread, fitted to the ankle. Elastic embroidery thread conforms to the body curve. Foot movement is converted to particle and cube animation on screen — heel down elongates the cube, toe raise shortens it.',
    'st.study.label':     'User Study',
    'st.study.heading':   'Workshop Results',
    'st.study.s1.title':  '8 Participants · 2 Hours',
    'st.study.s1.p':      '6 female, 2 male, age 20–40. All had basic programming and hardware skills; backgrounds in graphic and product design. Selected works: an eye mask sensing blink muscle movements (C), a raincoat lighting up with raindrops via water conductivity (G), and a "back wing" sensing wind through sequin movement (A).',
    'st.study.s2.title':  'Key Findings',
    'st.study.s2.p':      'Participants preferred sequins with complex structures. The detachable property enabled multiple rapid prototyping iterations. Likert scale: smart function was moderately limiting to design (M=3.88, SD=1.81). Participants completed both fashion and functional design within two hours.',
    'st.det.label':       'Details',
    'st.det.mat.l':       'Materials',   'st.det.mat.v':  'Conductive PLA · Non-conductive PLA · Linen · Organza · Conductive & rubber sewing thread',
    'st.det.tool.l':      'Tools',       'st.det.tool.v': 'Rhinoceros · Grasshopper · Arduino Uno · Brother Parie-EMM1901 · TouchDesigner',
    'st.det.kw.l':        'Keywords',    'st.det.kw.v':   'Smart Textiles · Conductive Material · Wearable Device · Sensing Interface · Digital Fabrication',
    'st.det.fund.l':      'Funding',     'st.det.fund.v': 'JST SPRING (JPMJSP2123) · ZOZO NEXT Inc., Japan',
    'st.next.label':      'Next Project',
    'st.next.title':      'Wearable Tech →',

    /* shared project page UI */
    'proj.back':          '← All Work',
  },

  /* ════════════════════════════════════════ 中文 ══ */
  zh: {
    'drag.colorful':      '彩色',
    'drag.without':       '黑白',
    'drag.text':          '拖动',

    'nav.work':           '作品',
    'nav.contact':        '联系',
    'back.link':          '所有作品',

    'hero.tag':           '设计师 · 研究员 · 创作者',
    'hero.subtitle':      '智能面料 · 可穿戴技术 · 设计工具 · 3D',
    'hero.cta':           '查看作品 ↓',
    'hero.scroll':        '滚动',

    'work.num':           '01',
    'work.heading':       '精选作品',

    'p1.num': '01',
    'p1.title':           '智能面料',
    'p1.desc':            '研究与开发集成传感器和响应材料的智能织物系统。',
    'p1.t1': '研究',      'p1.t2': '硬件',        'p1.t3': '材料',
    'p1.expand':          '查看详情',
    'p1.panel.tag':       '01 / 智能面料',
    'p1.panel.desc':      '研究与开发集成传感器和响应材料的智能织物系统，探索传统纺织品与嵌入式技术的边界。',
    'p1.panel.cta':       '查看完整项目 →',

    'p2.num': '02',
    'p2.title':           '可穿戴技术',
    'p2.desc':            '将时尚美学与功能电子结合的可穿戴技术设计。',
    'p2.t1': '设计',      'p2.t2': '电子',        'p2.t3': '时尚',
    'p2.expand':          '查看详情',
    'p2.panel.tag':       '02 / 可穿戴技术',
    'p2.panel.desc':      '将时尚美学与功能电子结合的可穿戴技术设计。形式与功能在身体边界相遇。',
    'p2.panel.cta':       '查看完整项目 →',

    'p3.num': '03',
    'p3.title':           '设计工具',
    'p3.desc':            '为在技术与工艺交叉领域工作的设计师打造的开源工具。',
    'p3.t1': '开源',      'p3.t2': '软件',        'p3.t3': '工具',
    'p3.expand':          '查看详情',
    'p3.panel.tag':       '03 / 设计工具',
    'p3.panel.desc':      '为在技术与工艺交叉领域工作的设计师打造的开源工具，由社区共建。',
    'p3.panel.cta':       '查看完整项目 →',

    'p4.num': '04',
    'p4.title':           '装置设计',
    'p4.desc':            '探索物理与数字空间边界的大型互动装置。',
    'p4.t1': '装置',      'p4.t2': '互动',        'p4.t3': '空间',
    'p4.expand':          '查看详情',
    'p4.panel.tag':       '04 / 装置设计',
    'p4.panel.desc':      '探索物理与数字空间边界的大型互动装置，营造回应身体的沉浸式环境。',
    'p4.panel.cta':       '查看完整项目 →',

    'p5.num': '05',
    'p5.title':           'AI 创想',
    'p5.desc':            '探索人工智能与设计实践交叉处的创意可能性。',
    'p5.t1': 'AI',        'p5.t2': '实验性',      'p5.t3': '生成式',
    'p5.expand':          '查看详情',
    'p5.panel.tag':       '05 / AI 创想',
    'p5.panel.desc':      '探索人工智能与设计实践交叉处的创意可能性，用于推测性思考的生成工具。',
    'p5.panel.cta':       '查看完整项目 →',

    'contact.num':        '02',
    'contact.heading':    '保持联系',
    'contact.desc':       '欢迎洽谈合作、研究合作，以及关于可穿戴技术未来的对话。',

    'footer.left':        '© 2025 MACA',
    'footer.right':       '智能面料 · 可穿戴技术 · 设计',

    /* ── SenSequins ── */
    'st.back':            '所有作品',
    'st.badge':           '研究 · UIST 2022',
    'st.num':             '01 / 05',
    'st.tagline':         '使用3D打印导电亮片的智能面料——通过亮片刺绣与数字化制造，将智能纺织品的设计空间从2D扩展至2.5D。',
    'st.meta.year.l':     '年份',       'st.meta.year.v':  '2022',
    'st.meta.auth.l':     '作者',       'st.meta.auth.v':  '马骅 · 山岡潤一',
    'st.meta.venue.l':    '会议',       'st.meta.venue.v': 'UIST \'22，美国俄勒冈州本德',
    'st.meta.cite.l':     '引用次数',   'st.meta.cite.v':  '16',
    'st.pub.label':       '发表信息',
    'st.pub.title':       'SenSequins：使用3D打印导电亮片的智能面料',
    'st.pub.authors':     '作者：马骅、山岡潤一 — 日本庆应义塾大学，神奈川县横滨市',
    'st.pub.venue':       '会议：UIST \'22：第35届ACM用户界面软件与技术年度研讨会',
    'st.pub.date':        '发表时间：2022年10月29日至11月2日 · 美国俄勒冈州本德 · 第111篇，共13页',
    'st.pub.funding':     '资助：JST SPRING（JPMJSP2123）· 日本ZOZO NEXT株式会社',
    'st.abstract':        '本研究以传统亮片刺绣为基础，利用3D打印机扩展亮片材料和结构的设计空间，开发了一种具有多种感应和交互功能的新型2.5D智能导电亮片织物，并为用户提供了自动化设计和制造的定制系统。',
    'st.demo.label':      '演示',
    'st.demo.caption':    'SenSequins 允许用户在软件中设计导电亮片（a），通过3D打印机和缝纫机组装纺织品（b, c），并构建运动感应和姿态检测等应用（d）。',
    'st.contrib.label':   '核心贡献',
    'st.contrib.heading': 'SenSequins 的独特之处',
    'st.c1.title':        '2.5D 半立体结构',
    'st.c1.p1':           '与平面智能织物电路不同，SenSequins 通过3D打印导电亮片将结构从二维扩展到三维。每个亮片作为独立的设计单元，可在导电性、形状和排列上自由调整。',
    'st.c1.p2':           '特殊的双层结构（基础织物＋亮片）为电子元件的设计和配置空间带来了远超平面刺绣的可能性。',
    'st.c2.title':        '模块化 · 可拆卸',
    'st.c2.p':            '大多数智能织物在原型阶段难以修改。SenSequins 通过使亮片易于拆卸和更换来解决这个问题——无需特殊缝纫技能。用户测试中，参与者在两小时工作坊内完成了完整的设计迭代。',
    'st.c3.title':        '翻转即开关',
    'st.c3.p':            '亮片平放时与相邻亮片接触形成闭合回路；触摸翻转后电路断开。将孔位于中央时，亮片具有双稳态——像滑动开关一样保持状态，直到手动归位。',
    'st.ds.label':        '设计空间',
    'st.ds.heading':      '亮片设计基元',
    'st.ds.c1.title':     '导电性控制',
    'st.ds.c1.p1':        '使用复合导电PLA（体积电阻率30 Ω-cm），通过改变亮片直径、厚度、重叠比和3D打印填充率来调节电阻。尺寸越小、厚度越大、重叠越多、填充率越低，导电性越强。',
    'st.ds.c1.p2':        '这些参数直接输入设计软件，在设计师调整尺寸时实时显示估算电阻值。',
    'st.ds.c2.title':     '感应模式',
    'st.ds.c2.p':         '电阻式：通过分压电路（Arduino Uno）检测亮片间接触。电容式：使用1–10 MΩ电阻，无接触感应触摸和接近。双稳态开关：中孔亮片锁定在翻转位置，充当滑动开关。锁定结构：阶梯状纹理尖端在压力下使亮片相互咬合。',
    'st.sys.label':       '系统',
    'st.sys.heading':     '设计工具与自动化制造',
    'st.sys.s1.title':    '设计软件',
    'st.sys.s1.p1':       '基于 Rhinoceros + Grasshopper 开发。用户准备目标曲面的网格数据，指定亮片直径、厚度、孔位和重叠量，工具自动在网格上排布亮片并实时显示估算电阻值。',
    'st.sys.s1.p2':       '输出：用于3D打印的STL文件，以及用于缝纫机定位路径的SVG文件。',
    'st.sys.s2.title':    '自动缝纫',
    'st.sys.s2.p':        '亮片以横排方式打印，排间有可折断支撑。电脑刺绣机（Brother Parie-EMM1901）依据SVG定位文件逐排缝纫亮片。缝纫完成后，手动折断支撑分离亮片。',
    'st.app.label':       '应用',
    'st.app.heading':     '原型展示',
    'st.app.a1.title':    '身体动作可视化服装',
    'st.app.a1.p':        '84个模块（6×14开关阵列）分布于双层服装（外层欧根纱，内层棉布）。鱼鳞形方形导电亮片在身体运动时闭合回路，触发反面的NeoPixel LED，通过TouchDesigner实时可视化。一位舞者穿着后表示"感觉像是在与自己的身体对话"。',
    'st.app.a2.title':    '踝关节姿态检测',
    'st.app.a2.p':        '使用橡皮筋线刺绣的弯曲25mm导电亮片贴合踝关节，弹性绣线随身体曲线伸展。脚部运动转化为屏幕上粒子和立方体的动画——脚跟落地时立方体拉长，脚尖抬起时缩短。',
    'st.study.label':     '用户研究',
    'st.study.heading':   '工作坊结果',
    'st.study.s1.title':  '8名参与者 · 2小时',
    'st.study.s1.p':      '6女2男，年龄20–40岁，均有基础编程和硬件设计技能，专业背景为平面设计和产品设计。代表作品：感应眼周肌肉运动的装饰眼罩（C）、通过水导电控制LED的雨衣（G）、用亮片感应风向的"背翼"（A）。',
    'st.study.s2.title':  '主要发现',
    'st.study.s2.p':      '参与者更偏好结构复杂的亮片。可拆卸特性支持多次快速原型迭代。李克特量表结果：智能功能对设计的限制程度适中（M=3.88，SD=1.81）。参与者在两小时内完成了时尚设计与功能设计的融合。',
    'st.det.label':       '详细信息',
    'st.det.mat.l':       '材料',   'st.det.mat.v':  '导电PLA · 非导电PLA · 亚麻布 · 欧根纱 · 导电线与橡皮筋线',
    'st.det.tool.l':      '工具',   'st.det.tool.v': 'Rhinoceros · Grasshopper · Arduino Uno · Brother Parie-EMM1901 · TouchDesigner',
    'st.det.kw.l':        '关键词', 'st.det.kw.v':   '智能面料 · 导电材料 · 可穿戴设备 · 感应界面 · 数字化制造',
    'st.det.fund.l':      '资助',   'st.det.fund.v': 'JST SPRING（JPMJSP2123）· 日本ZOZO NEXT株式会社',
    'st.next.label':      '下一个项目',
    'st.next.title':      '可穿戴技术 →',
  },

  /* ════════════════════════════════════════ 日本語 ══ */
  ja: {
    'drag.colorful':      'カラー',
    'drag.without':       'モノクロ',
    'drag.text':          'ドラッグ',

    'nav.work':           '作品',
    'nav.contact':        'お問い合わせ',
    'back.link':          '作品一覧',

    'hero.tag':           'デザイナー · 研究者 · メイカー',
    'hero.subtitle':      'スマートテキスタイル · ウェアラブル · デザインツール · 3D',
    'hero.cta':           '作品を見る ↓',
    'hero.scroll':        'スクロール',

    'work.num':           '01',
    'work.heading':       '主な作品',

    'p1.num': '01',
    'p1.title':           'スマートテキスタイル',
    'p1.desc':            'センサーと応答性素材を統合したスマートファブリックシステムの研究開発。',
    'p1.t1': '研究',      'p1.t2': 'ハードウェア',  'p1.t3': '素材',
    'p1.expand':          '詳細を見る',
    'p1.panel.tag':       '01 / スマートテキスタイル',
    'p1.panel.desc':      'センサーと応答性素材を統合したスマートファブリックシステムの研究開発。伝統的なテキスタイルと組込み技術の境界を探る。',
    'p1.panel.cta':       'プロジェクト詳細 →',

    'p2.num': '02',
    'p2.title':           'ウェアラブルテック',
    'p2.desc':            'ファッションの美学と機能的エレクトロニクスを融合したウェアラブル技術のデザイン。',
    'p2.t1': 'デザイン', 'p2.t2': 'エレクトロニクス', 'p2.t3': 'ファッション',
    'p2.expand':          '詳細を見る',
    'p2.panel.tag':       '02 / ウェアラブルテック',
    'p2.panel.desc':      'ファッションの美学と機能的エレクトロニクスを融合したウェアラブル技術のデザイン。身体の境界でフォームとファンクションが出会う。',
    'p2.panel.cta':       'プロジェクト詳細 →',

    'p3.num': '03',
    'p3.title':           'デザインツール',
    'p3.desc':            'テクノロジーとクラフトの交差点で活動するデザイナー向けのオープンソースツール。',
    'p3.t1': 'オープンソース', 'p3.t2': 'ソフトウェア', 'p3.t3': 'ツール',
    'p3.expand':          '詳細を見る',
    'p3.panel.tag':       '03 / デザインツール',
    'p3.panel.desc':      'テクノロジーとクラフトの交差点で活動するデザイナー向けのオープンソースツール。コミュニティとともに構築。',
    'p3.panel.cta':       'プロジェクト詳細 →',

    'p4.num': '04',
    'p4.title':           'インスタレーション',
    'p4.desc':            '物理空間とデジタル空間の境界を探る大規模インタラクティブインスタレーション。',
    'p4.t1': 'インスタレーション', 'p4.t2': 'インタラクティブ', 'p4.t3': '空間',
    'p4.expand':          '詳細を見る',
    'p4.panel.tag':       '04 / インスタレーション',
    'p4.panel.desc':      '物理空間とデジタル空間の境界を探る大規模インタラクティブインスタレーション。身体に応答する没入的な環境。',
    'p4.panel.cta':       'プロジェクト詳細 →',

    'p5.num': '05',
    'p5.title':           'AIとのアイデア',
    'p5.desc':            '人工知能とデザイン実践の交差点における創造的可能性の探求。',
    'p5.t1': 'AI',        'p5.t2': '実験的',      'p5.t3': 'ジェネラティブ',
    'p5.expand':          '詳細を見る',
    'p5.panel.tag':       '05 / AIとのアイデア',
    'p5.panel.desc':      '人工知能とデザイン実践の交差点における創造的可能性の探求。投機的思考のための生成ツール。',
    'p5.panel.cta':       'プロジェクト詳細 →',

    'contact.num':        '02',
    'contact.heading':    'ご連絡ください',
    'contact.desc':       'コラボレーション、研究パートナーシップ、ウェアラブルテクノロジーの未来についての対話を歓迎します。',

    'footer.left':        '© 2025 MACA',
    'footer.right':       'スマートテキスタイル · ウェアラブル · デザイン',

    /* ── SenSequins ── */
    'st.back':            '作品一覧',
    'st.badge':           '研究 · UIST 2022',
    'st.num':             '01 / 05',
    'st.tagline':         '3Dプリント導電性スパンコールを用いたスマートテキスタイル——スパンコール刺繍とデジタルファブリケーションにより、スマートテキスタイルのデザイン空間を2Dから2.5Dへ拡張する。',
    'st.meta.year.l':     '年',          'st.meta.year.v':  '2022',
    'st.meta.auth.l':     '著者',        'st.meta.auth.v':  '馬骅 · 山岡潤一',
    'st.meta.venue.l':    '会議',        'st.meta.venue.v': 'UIST \'22，米国オレゴン州ベンド',
    'st.meta.cite.l':     '引用数',      'st.meta.cite.v':  '16',
    'st.pub.label':       '発表情報',
    'st.pub.title':       'SenSequins：3Dプリント導電性スパンコールを用いたスマートテキスタイル',
    'st.pub.authors':     '著者：馬骅、山岡潤一 — 慶應義塾大学、神奈川県横浜市',
    'st.pub.venue':       '会議：UIST \'22：第35回ACMユーザインタフェースソフトウェアと技術シンポジウム',
    'st.pub.date':        '発表：2022年10月29日〜11月2日 · 米国オレゴン州ベンド · 第111号，全13ページ',
    'st.pub.funding':     '助成：JST SPRING（JPMJSP2123）· ZOZO NEXT株式会社',
    'st.abstract':        '本研究では、従来のスパンコール刺繍を基盤として3Dプリンターを活用し、スパンコール素材と構造のデザイン空間を拡張した。複数のセンシングとインタラクション機能を持つ新しい2.5Dスマート導電性スパンコールテキスタイルを開発するとともに、自動化された設計・製造のカスタマイズシステムをユーザーに提供した。',
    'st.demo.label':      'デモ',
    'st.demo.caption':    'SenSequinsでは、ユーザーがソフトウェアで導電性スパンコールをデザインし（a）、3Dプリンターとミシンでテキスタイルを組み立て（b, c）、動作センシングや姿勢検出などのアプリケーションを構築できる（d）。',
    'st.contrib.label':   '貢献',
    'st.contrib.heading': 'SenSequinsの独自性',
    'st.c1.title':        '2.5D 半立体構造',
    'st.c1.p1':           '平面スマートテキスタイル回路とは異なり、SenSequinsは3Dプリント導電性スパンコールにより構造を2次元から3次元へと拡張する。各スパンコールは独立したデザインユニットとして機能し、導電性・形状・配置を自由に調整できる。',
    'st.c1.p2':           '基材テキスタイルとスパンコールの二層構造は、平面刺繍を大幅に超えた電子部品の設計・配置空間を実現する。',
    'st.c2.title':        'モジュール式 · 脱着可能',
    'st.c2.p':            'ほとんどのスマートテキスタイルはプロトタイピング段階での修正が困難だが、SenSequinsはスパンコールを簡単に取り外し・交換できる設計で解決している。特殊な縫製技術は不要。ユーザーテストでは参加者が2時間のワークショップ内で完全な設計反復を完了した。',
    'st.c3.title':        '反転でスイッチ',
    'st.c3.p':            'スパンコールが平らに並ぶと隣のスパンコールと接触して回路が閉じる。触れて反転させると回路が開く。穴を端ではなく中央に配置することで双安定状態となり、手動で戻すまで反転状態を保持するスライドスイッチとして機能する。',
    'st.ds.label':        'デザイン空間',
    'st.ds.heading':      'スパンコール設計プリミティブ',
    'st.ds.c1.title':     '導電性の制御',
    'st.ds.c1.p1':        '複合導電性PLA（体積抵抗率30 Ω-cm）を使用し、スパンコールの直径・厚さ・重なり率・3D印刷充填率を変えることで抵抗を調整できる。小さいサイズ・大きい厚さ・高い重なり・低い充填率がより高い導電性をもたらす。',
    'st.ds.c1.p2':        'これらのパラメータはデザインソフトウェアに直接反映され、デザイナーが寸法を調整するたびに推定抵抗値がリアルタイムで表示される。',
    'st.ds.c2.title':     'センシングモード',
    'st.ds.c2.p':         '抵抗式：分圧回路（Arduino Uno）によりスパンコール間の接触を検出。容量式：1〜10 MΩの抵抗を用いて、接触なしでタッチと近接を感知。双安定スイッチ：中央穴スパンコールが反転位置でロックされスライドスイッチとして機能。ロック構造：階段状テクスチャーの先端が圧力下でスパンコールを結合させる。',
    'st.sys.label':       'システム',
    'st.sys.heading':     'デザインツールと自動製造',
    'st.sys.s1.title':    'デザインソフトウェア',
    'st.sys.s1.p1':       'Rhinoceros + Grasshopperで構築。ユーザーが対象曲面のメッシュデータを用意し、スパンコールの直径・厚さ・穴位置・重なりを指定すると、ツールが自動的にメッシュ全体にスパンコールを配置し、推定抵抗値をリアルタイム表示する。',
    'st.sys.s1.p2':       '出力：3Dプリント用STLファイルとミシンの位置決めパス用SVGファイル。',
    'st.sys.s2.title':    '自動縫製',
    'st.sys.s2.p':        'スパンコールは折り取れるサポート材を挟んで横一列に印刷される。コンピューター刺繍ミシン（Brother Parie-EMM1901）がSVGファイルに従って列ごとに縫製。縫製後、サポート材を手で折って分離することで完成する。',
    'st.app.label':       'アプリケーション',
    'st.app.heading':     'プロトタイプ',
    'st.app.a1.title':    '身体動作可視化ガーメント',
    'st.app.a1.p':        '84モジュール（6×14スイッチアレイ）を二層構造のガーメント（外層オーガンジー、内層コットン）に配置。魚鱗形の方形導電性スパンコールが身体の動きで回路を閉じ、裏面のNeoPixel LEDを点灯させる。TouchDesignerでリアルタイム可視化。ダンサーは「自分の身体と対話しているようだ」と述べた。',
    'st.app.a2.title':    '足首姿勢検出',
    'st.app.a2.p':        'ゴム糸で刺繍した湾曲25mmの導電性スパンコールを足首に装着。弾性の刺繍糸が身体の曲線に沿って伸縮する。足の動きを画面上のパーティクルとキューブのアニメーションに変換——かかと着地でキューブが伸び、つま先立ちで縮む。',
    'st.study.label':     'ユーザースタディ',
    'st.study.heading':   'ワークショップ結果',
    'st.study.s1.title':  '8名の参加者 · 2時間',
    'st.study.s1.p':      '女性6名・男性2名、年齢20〜40歳。全員が基礎的なプログラミングとハードウェア設計スキルを持ち、グラフィックデザインとプロダクトデザインを専門とする。代表作品：まばたきの筋肉動作を感知する装飾アイマスク（C）、水の導電性でLEDを制御するレインコート（G）、スパンコールで風を感知する「背の羽」（A）。',
    'st.study.s2.title':  '主な知見',
    'st.study.s2.p':      '参加者は複雑な構造のスパンコールを好んだ。脱着可能な特性により迅速な反復プロトタイピングが実現した。リッカート尺度：スマート機能はデザインへの制約がやや低いと評価された（M=3.88，SD=1.81）。参加者は2時間でファッションデザインとスマート機能設計の両立を達成した。',
    'st.det.label':       '詳細',
    'st.det.mat.l':       '素材',     'st.det.mat.v':  '導電性PLA · 非導電性PLA · リネン · オーガンジー · 導電糸とゴム糸',
    'st.det.tool.l':      'ツール',   'st.det.tool.v': 'Rhinoceros · Grasshopper · Arduino Uno · Brother Parie-EMM1901 · TouchDesigner',
    'st.det.kw.l':        'キーワード', 'st.det.kw.v': 'スマートテキスタイル · 導電性材料 · ウェアラブルデバイス · センシングインタフェース · デジタルファブリケーション',
    'st.det.fund.l':      '助成',     'st.det.fund.v': 'JST SPRING（JPMJSP2123）· ZOZO NEXT株式会社',
    'st.next.label':      '次のプロジェクト',
    'st.next.title':      'ウェアラブルテック →',
  },
};

/* ─── ENGINE ─── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';
  localStorage.setItem('lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initI18n() {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}
