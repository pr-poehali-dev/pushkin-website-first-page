import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('biography');

  const works = [
    { title: 'Евгений Онегин', year: '1823-1831', genre: 'Роман в стихах' },
    { title: 'Капитанская дочка', year: '1836', genre: 'Повесть' },
    { title: 'Медный всадник', year: '1833', genre: 'Поэма' },
    { title: 'Руслан и Людмила', year: '1820', genre: 'Поэма' },
    { title: 'Борис Годунов', year: '1825', genre: 'Драма' },
    { title: 'Пиковая дама', year: '1834', genre: 'Повесть' },
  ];

  const quotes = [
    { text: 'Мы все учились понемногу чему-нибудь и как-нибудь', work: 'Евгений Онегин' },
    { text: 'Я вас любил: любовь ещё, быть может, в душе моей угасла не совсем', work: 'Лирика' },
    { text: 'Москва... как много в этом звуке для сердца русского слилось!', work: 'Евгений Онегин' },
    { text: 'Служенье муз не терпит суеты', work: '19 октября' },
  ];

  const timeline = [
    { year: '1799', event: 'Родился в Москве, 6 июня' },
    { year: '1811', event: 'Поступление в Царскосельский лицей' },
    { year: '1817', event: 'Окончание лицея, служба в Коллегии иностранных дел' },
    { year: '1820', event: 'Публикация поэмы "Руслан и Людмила"' },
    { year: '1823', event: 'Начало работы над "Евгением Онегиным"' },
    { year: '1831', event: 'Женитьба на Наталье Гончаровой' },
    { year: '1833', event: 'Создание "Медного всадника" и "Пиковой дамы"' },
    { year: '1837', event: 'Дуэль с Дантесом, смерть 29 января' },
  ];

  return (
    <div className="min-h-screen paper-texture">
      <header className="border-b-2 border-primary/30 bg-card/80 backdrop-blur-sm sticky top-0 z-50 book-shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              ПУШКИНЪ
            </h1>
            <div className="flex gap-2">
              <Icon name="Feather" className="text-primary" size={32} />
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img
                src="https://v3b.fal.media/files/b/monkey/XF1X8OS5uEQRN3jBTWwTI_output.png"
                alt="Александр Сергеевич Пушкин"
                className="w-full max-w-md mx-auto rounded-lg book-shadow"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <Badge className="text-lg px-4 py-2">Солнце русской поэзии</Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-shadow">
                Александр Сергеевич Пушкин
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground italic">
                1799 — 1837
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                "Читая его творения, можно превосходным образом воспитать в себе человека"
                <footer className="text-sm mt-2 not-italic">— В.Г. Белинский</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="biography" className="w-full" onValueChange={setActiveSection}>
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 bg-background/50">
              <TabsTrigger value="biography" className="text-sm md:text-base">
                <Icon name="User" size={18} className="mr-2" />
                Биография
              </TabsTrigger>
              <TabsTrigger value="works" className="text-sm md:text-base">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Произведения
              </TabsTrigger>
              <TabsTrigger value="quotes" className="text-sm md:text-base">
                <Icon name="Quote" size={18} className="mr-2" />
                Цитаты
              </TabsTrigger>
              <TabsTrigger value="timeline" className="text-sm md:text-base">
                <Icon name="Clock" size={18} className="mr-2" />
                Хронология
              </TabsTrigger>
              <TabsTrigger value="creativity" className="text-sm md:text-base">
                <Icon name="Palette" size={18} className="mr-2" />
                Творчество
              </TabsTrigger>
              <TabsTrigger value="gallery" className="text-sm md:text-base">
                <Icon name="Image" size={18} className="mr-2" />
                Галерея
              </TabsTrigger>
            </TabsList>

            <TabsContent value="biography" className="animate-fade-in">
              <Card className="book-shadow border-2">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="User" className="text-primary" />
                    Биография
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed">
                      <span className="text-4xl float-left mr-3 mt-1 font-bold text-primary">А</span>
                      лександр Сергеевич Пушкин родился 6 июня 1799 года в Москве, в дворянской семье. 
                      С раннего детства будущий поэт воспитывался в литературной среде. Отец его был 
                      ценителем литературы, имел большую библиотеку, дядя был поэтом.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      В 1811 году Пушкин поступил в Царскосельский лицей, где получил блестящее образование. 
                      Именно здесь началась его поэтическая деятельность. Уже в лицее его талант был замечен 
                      и высоко оценен такими мастерами, как Державин, Жуковский, Батюшков.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      После окончания лицея в 1817 году Пушкин был зачислен на службу в Коллегию иностранных дел. 
                      Молодой поэт окунулся в бурную петербургскую жизнь, увлекся театром. В эти годы он создает 
                      свои первые поэмы, стихотворения, критические статьи.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      За вольнодумство в 1820 году поэт был отправлен в ссылку на юг России. Несмотря на тяготы 
                      изгнания, этот период стал очень плодотворным в творчестве Пушкина. Здесь были написаны 
                      романтические поэмы "Кавказский пленник", "Бахчисарайский фонтан", начат роман "Евгений Онегин".
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="works" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map((work, index) => (
                  <Card key={index} className="book-shadow hover:shadow-2xl transition-shadow duration-300 border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Icon name="BookOpen" className="text-primary" size={28} />
                        <Badge variant="secondary">{work.year}</Badge>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{work.title}</h4>
                      <p className="text-muted-foreground italic">{work.genre}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="quotes" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {quotes.map((quote, index) => (
                  <Card key={index} className="book-shadow border-2 hover:border-primary transition-colors">
                    <CardContent className="p-8">
                      <Icon name="Quote" className="text-primary mb-4" size={32} />
                      <blockquote className="text-lg italic leading-relaxed mb-4">
                        "{quote.text}"
                      </blockquote>
                      <footer className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="Book" size={16} />
                        {quote.work}
                      </footer>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="animate-fade-in">
              <Card className="book-shadow border-2">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" />
                    Жизненный путь
                  </h3>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                            {item.year.slice(2)}
                          </div>
                          {index < timeline.length - 1 && (
                            <div className="w-0.5 h-full bg-primary/30 mt-2" />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="text-xl font-bold text-primary mb-1">{item.year}</div>
                          <p className="text-lg">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="creativity" className="animate-fade-in">
              <Card className="book-shadow border-2">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="Palette" className="text-primary" />
                    Творческое наследие
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-background/50 rounded-lg border-2 border-primary/20">
                      <Icon name="Scroll" className="text-primary mb-3" size={32} />
                      <h4 className="font-bold text-xl mb-2">Поэзия</h4>
                      <p className="text-muted-foreground">
                        Более 800 лирических стихотворений, от романтических од до философских размышлений
                      </p>
                    </div>
                    <div className="p-6 bg-background/50 rounded-lg border-2 border-primary/20">
                      <Icon name="Theater" className="text-primary mb-3" size={32} />
                      <h4 className="font-bold text-xl mb-2">Драматургия</h4>
                      <p className="text-muted-foreground">
                        Трагедии и драмы, включая "Бориса Годунова" и "маленькие трагедии"
                      </p>
                    </div>
                    <div className="p-6 bg-background/50 rounded-lg border-2 border-primary/20">
                      <Icon name="BookMarked" className="text-primary mb-3" size={32} />
                      <h4 className="font-bold text-xl mb-2">Проза</h4>
                      <p className="text-muted-foreground">
                        Повести и романы, создавшие основу русской прозы XIX века
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery" className="animate-fade-in">
              <Card className="book-shadow border-2">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="Image" className="text-primary" />
                    Галерея
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center">
                        <Icon name="Image" size={48} className="text-primary/40 mx-auto mb-2" />
                        <p className="text-muted-foreground">Портреты поэта</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center">
                        <Icon name="Map" size={48} className="text-primary/40 mx-auto mb-2" />
                        <p className="text-muted-foreground">Места жизни</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center">
                        <Icon name="Scroll" size={48} className="text-primary/40 mx-auto mb-2" />
                        <p className="text-muted-foreground">Рукописи</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center">
                        <Icon name="Home" size={48} className="text-primary/40 mx-auto mb-2" />
                        <p className="text-muted-foreground">Музеи</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t-2 border-primary/30 py-12 bg-card/50 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-3 mb-4">
            <Icon name="Feather" className="text-primary" size={24} />
            <Icon name="BookOpen" className="text-primary" size={24} />
            <Icon name="Scroll" className="text-primary" size={24} />
          </div>
          <p className="text-muted-foreground text-lg italic">
            "Чувства добрые я лирой пробуждал"
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            © 2024 Посвящается великому русскому поэту
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
