import React from 'react';
import { Check, X } from 'lucide-react';

function StatusDiagram() {
  return (
    <section className="bg-cf-light-gray py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Browser Status */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-16 bg-gray-400 rounded-t-lg">
                <div className="flex gap-1 p-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="bg-white h-8 mx-2 rounded flex items-center justify-center">
                  <div className="w-8 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="status-icon working">
                  <Check className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-cf-gray font-medium">You</div>
              <div className="text-cf-gray text-sm mt-1">Browser</div>
              <div className="status-text working">Working</div>
            </div>
          </div>

          {/* Cloudflare Status */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-12 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="status-icon working">
                  <Check className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-cf-gray font-medium">Warsaw</div>
              <div className="text-cf-blue text-sm mt-1 hover:underline cursor-pointer">Cloudflare</div>
              <div className="status-text working">Working</div>
            </div>
          </div>

          {/* Host Status */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-16 bg-gray-400 rounded-lg flex items-center justify-center">
                <div className="w-12 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="status-icon error">
                  <X className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-cf-gray font-medium">sargas.io</div>
              <div className="text-cf-gray text-sm mt-1">Host</div>
              <div className="status-text error">Error</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatusDiagram;