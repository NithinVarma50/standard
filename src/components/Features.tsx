import { Smartphone, MonitorPlay, Sparkles } from "lucide-react";

const features = [
    {
        icon: MonitorPlay,
        title: "Ultra High Def",
        description: "Experience 4K+ resolution wallpapers that look crisp on even the largest monitors and Retina displays."
    },
    {
        icon: Smartphone,
        title: "Device Optimized",
        description: "Every image is hand-cropped and formatted to fit perfectly on both mobile and desktop screens."
    },
    {
        icon: Sparkles,
        title: "Curated Collection",
        description: "No AI noise or generic stock photos. Only the most aesthetic, high-quality visuals make the cut."
    }
];

export function Features() {
    return (
        <section className="w-full py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center space-y-6 animate-fade-slide-in-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="w-8 h-8 text-white/80 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-wide">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed max-w-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
