import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';

type Format = 'vertical' | 'horizontal';

const Index = () => {
  const [format, setFormat] = useState<Format>('vertical');

  const handleDownload = async () => {
    const element = document.getElementById('infographic');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#F8F5F2',
        logging: false,
        useCORS: true,
      });

      const link = document.createElement('a');
      link.download = `flower-care-infographic-${format}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F2] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2E2E2E] mb-4">
            Инфографика: правильная обрезка цветов
          </h1>
          <p className="text-lg text-[#2E2E2E]/80 mb-6">
            Выберите формат для просмотра и скачивания
          </p>
          
          <div className="flex justify-center gap-4 mb-6">
            <Button
              onClick={() => setFormat('vertical')}
              variant={format === 'vertical' ? 'default' : 'outline'}
              className="bg-[#4A7C59] hover:bg-[#3d6a4a] text-white"
            >
              Вертикальная (1080×1920)
            </Button>
            <Button
              onClick={() => setFormat('horizontal')}
              variant={format === 'horizontal' ? 'default' : 'outline'}
              className="bg-[#4A7C59] hover:bg-[#3d6a4a] text-white"
            >
              Горизонтальная (1920×1080)
            </Button>
          </div>

          <Button
            onClick={handleDownload}
            className="bg-[#A85C2C] hover:bg-[#8f4e24] text-white"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать PNG
          </Button>
        </div>

        <div className="flex justify-center">
          <Card
            id="infographic"
            className={`bg-[#F8F5F2] shadow-2xl overflow-hidden transition-all duration-500 ${
              format === 'vertical'
                ? 'w-[540px] h-[960px]'
                : 'w-[960px] h-[540px]'
            }`}
          >
            <div className={`h-full p-8 flex ${format === 'vertical' ? 'flex-col' : 'flex-row'} gap-6`}>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#2E2E2E] mb-2">
                  Почему важно обрезать стебли под углом?
                </h2>
              </div>

              <div className={`flex ${format === 'vertical' ? 'flex-col' : 'flex-row'} gap-6 flex-1`}>
                <Card className="flex-1 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-2 border-red-300"></div>
                    <div className="absolute bottom-8 right-6 w-8 h-8 rounded-full border-2 border-red-300"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="mb-4">
                      <img 
                        src="https://cdn.poehali.dev/projects/67594705-ce74-4c99-a404-16ff9f9682e0/files/134993c5-a82d-4675-9d93-07a788cdc287.jpg" 
                        alt="Проблема" 
                        className="w-48 h-48 object-cover rounded-lg shadow-md" 
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                      Проблема
                    </h3>
                    <p className="text-lg font-semibold text-red-700 mb-2">
                      Старый срез мешает<br />впитывать воду
                    </p>
                    <p className="text-sm text-[#2E2E2E]/70">
                      Со временем срез затягивается, образуются воздушные пробки — цветок «голодает»
                    </p>
                  </div>
                </Card>

                <Card className="flex-1 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-6 right-4 w-16 h-16 opacity-20">
                      <Icon name="Scissors" size={64} className="text-[#4A7C59]" />
                    </div>
                    <div className="absolute bottom-12 left-8 w-10 h-10 rounded-full border-2 border-green-400"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="mb-4">
                      <img 
                        src="https://cdn.poehali.dev/projects/67594705-ce74-4c99-a404-16ff9f9682e0/files/a3867ce9-d0b9-486b-8999-a4825b37f965.jpg" 
                        alt="Решение" 
                        className="w-48 h-48 object-cover rounded-lg shadow-md"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                      Решение
                    </h3>
                    <p className="text-lg font-semibold text-[#4A7C59] mb-2">
                      Свежий срез<br />под углом 45°
                    </p>
                    <p className="text-sm text-[#2E2E2E]/70">
                      Угол увеличивает площадь контакта с водой. Режьте только острым инструментом
                    </p>
                  </div>
                </Card>

                <Card className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-8 left-6 w-3 h-3 rounded-full bg-blue-400 animate-ping"></div>
                    <div className="absolute bottom-16 right-8 w-4 h-4 rounded-full bg-blue-400 animate-ping" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute top-1/2 right-12 w-2 h-2 rounded-full bg-blue-400 animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="mb-4">
                      <img 
                        src="https://cdn.poehali.dev/projects/67594705-ce74-4c99-a404-16ff9f9682e0/files/45e1f6be-e391-4b33-8794-7b677e8cf05d.jpg" 
                        alt="Результат" 
                        className="w-48 h-48 object-cover rounded-lg shadow-md"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                      Результат
                    </h3>
                    <p className="text-lg font-semibold text-blue-700 mb-2">
                      Цветы пьют активнее —<br />букет живёт дольше!
                    </p>
                    <p className="text-sm text-[#2E2E2E]/70">
                      Повторяйте обрезку каждые 1–2 дня при смене воды
                    </p>
                  </div>
                </Card>
              </div>

              <div className="mt-6 bg-white/50 rounded-lg p-4">
                <div className={`grid ${format === 'vertical' ? 'grid-cols-1' : 'grid-cols-3'} gap-4 text-sm`}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#4A7C59] flex items-center justify-center text-white">
                      ✂️
                    </div>
                    <p className="text-[#2E2E2E]/80">Используйте только острые инструменты</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#4A7C59] flex items-center justify-center text-white">
                      💧
                    </div>
                    <p className="text-[#2E2E2E]/80">Режьте под водой для лучшего результата</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#4A7C59] flex items-center justify-center text-white">
                      ⏱️
                    </div>
                    <p className="text-[#2E2E2E]/80">Делайте срез сразу после покупки</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-[#2E2E2E]/60 italic">
                  Маленький секрет для долгой жизни вашего букета.<br />
                  Попробуйте — и цветы скажут вам «спасибо»!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
