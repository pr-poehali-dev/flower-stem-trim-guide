import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Download } from 'lucide-react';

type Format = 'vertical' | 'horizontal';

const Index = () => {
  const [format, setFormat] = useState<Format>('vertical');

  const handleDownload = () => {
    const element = document.getElementById('infographic');
    if (!element) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = format === 'vertical' ? 1080 : 1920;
    const height = format === 'vertical' ? 1920 : 1080;

    canvas.width = width;
    canvas.height = height;

    const link = document.createElement('a');
    link.download = `flower-care-infographic-${format}.png`;
    link.href = canvas.toDataURL();
    link.click();
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
                <Card className="flex-1 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="AlertCircle" size={48} className="text-red-600" />
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
                  <div className="mt-4 w-full h-32 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-3 h-24 bg-gradient-to-b from-green-600 to-green-800 rounded-full relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-400 rounded"></div>
                      </div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600"></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="flex-1 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Scissors" size={48} className="text-[#4A7C59]" />
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
                  <div className="mt-4 w-full h-32 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-3 h-24 bg-gradient-to-b from-green-500 to-green-700 rounded-t-full relative">
                        <div className="absolute bottom-0 left-0 w-6 h-3 bg-green-600" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}></div>
                      </div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-pink-500"></div>
                      </div>
                      <div className="absolute -right-8 bottom-2">
                        <Icon name="Scissors" size={24} className="text-[#4A7C59]" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Sparkles" size={48} className="text-blue-600" />
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
                  <div className="mt-4 w-full h-32 flex items-center justify-center relative">
                    <div className="relative">
                      <div className="w-3 h-24 bg-gradient-to-b from-green-400 to-green-600 rounded-t-full relative">
                        <div className="absolute bottom-0 left-0 w-6 h-3 bg-green-500" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}></div>
                      </div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
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
