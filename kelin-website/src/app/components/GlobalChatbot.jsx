"use client";
import { useState, useEffect, useRef } from 'react';
import './GlobalChatbot.css';

export default function GlobalChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! Welcome to Kelin. I'm here to help you with any questions about our complete range of printing industry solutions including printers, cutting machines, materials, inks, and accessories. How can I assist you today?",
            isBot: true,
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Function to convert URLs to clickable links
    const linkifyText = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.split(urlRegex).map((part, index) => {
            if (part.match(urlRegex)) {
                return (
                    <a
                        key={index}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const predefinedResponses = {
        greeting: [
            "Hello! Welcome to Kelin Graphics System. I'm here to help you find the perfect printing or cutting solution for your business.",
            "Hi there! How can I assist you with our industrial printing and cutting equipment today?",
            "Welcome! I'd be happy to help you learn more about our products and services."
        ],
        products: [
            "We offer a wide range of products including:\n• Sublimation Printers (FD6198E-A, Kirin DA182T Plus)\n• Cutting Plotters (GCC Expert series, iEcho systems)\n• UV Printers and DTF Solutions\n• Heat Press Machines and Laminators\n\nWhich category interests you most?",
            "Our product portfolio includes industrial-grade printing and cutting solutions. Would you like to know more about sublimation printers, cutting machines, or our complete workflow solutions?"
        ],
        pricing: [
            "For detailed pricing information, I'd recommend speaking with our sales team who can provide customized quotes based on your specific needs. Would you like me to connect you with a sales representative?",
            "Pricing varies depending on your requirements and volume. Our sales team can provide competitive quotes tailored to your business. Shall I arrange a consultation for you?"
        ],
        support: [
            "We provide comprehensive support including:\n• Technical assistance and troubleshooting\n• Training and installation services\n• Maintenance and repair services\n• Software support and updates\n\nWhat type of support do you need?",
            "Our support team is ready to help with installation, training, maintenance, and technical issues. What can we assist you with?"
        ],
        contact: [
            "You can reach us through:\n• Website: www.kelinph.com\n• Facebook: https://www.facebook.com/KelinGraphicsPH\n• Instagram: https://www.instagram.com/kelingraphicsph/\n• Email: info@kelinph.com\n• Phone: 0917 678 0608 | 0908 196 0836\n\nWould you like me to connect you directly with our sales team?",
            "I can help you get in touch with the right department. Here are our contact options:\n• Facebook Messenger: https://www.facebook.com/KelinGraphicsPH\n• Instagram DM: https://www.instagram.com/kelingraphicsph/\n• Email: info@kelinph.com\n• Phone: (02) 8711-1888\n\nAre you looking for sales information, technical support, or general inquiries?"
        ]
    };

    const quickReplies = [
        "Product Information",
        "Pricing & Quotes",
        "Technical Support",
        "Contact Sales",
        "Facebook Messenger"
    ];

    const getBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase();

        // Check if user has asked many questions
        const shouldSuggestFacebook = questionCount >= 3;
        const facebookSuggestion = "\n\nFor more detailed assistance and faster responses, you can also message us directly on our Facebook page: https://www.facebook.com/KelinGraphicsPH\n\nOur team is very active there and can provide personalized support!";

        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
        }

        if (message.includes('product') || message.includes('machine') || message.includes('printer') || message.includes('cutter')) {
            const response = predefinedResponses.products[Math.floor(Math.random() * predefinedResponses.products.length)];
            return shouldSuggestFacebook ? response + facebookSuggestion : response;
        }

        if (message.includes('price') || message.includes('cost') || message.includes('quote') || message.includes('pricing')) {
            const response = predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)];
            return shouldSuggestFacebook ? response + facebookSuggestion : response;
        }

        if (message.includes('support') || message.includes('help') || message.includes('technical') || message.includes('installation')) {
            const response = predefinedResponses.support[Math.floor(Math.random() * predefinedResponses.support.length)];
            return shouldSuggestFacebook ? response + facebookSuggestion : response;
        }

        if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach') || message.includes('facebook messenger')) {
            return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)];
        }

        // Default response with Facebook suggestion for complex questions
        const defaultResponse = "Thank you for your message. For specific technical questions or detailed product information, I'd recommend speaking with our expert team. Would you like me to connect you with a sales representative who can provide personalized assistance?";
        return shouldSuggestFacebook ? defaultResponse + facebookSuggestion : defaultResponse;
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        const userMessage = {
            id: messages.length + 1,
            text: inputMessage,
            isBot: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);
        setQuestionCount(prev => prev + 1);

        // Simulate bot typing delay
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: getBotResponse(inputMessage),
                isBot: true,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const handleQuickReply = (reply) => {
        setInputMessage(reply);
        setQuestionCount(prev => prev + 1);
        setTimeout(() => handleSendMessage(), 100);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Chatbot Trigger Button */}
            <button
                className={`chatbot-trigger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open chat support"
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <>
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                        </svg>
                        <div className="chat-pulse-indicator"></div>
                    </>
                )}
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div className="chatbot-window">
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-header-info">
                            <div className="chatbot-avatar">
                                <img
                                    src="/kgs-icon.png"
                                    alt="Kelin Logo"
                                    className="chatbot-logo"
                                />
                            </div>
                            <div>
                                <h3>Kelin Support</h3>
                                <span className="online-status">● Online</span>
                            </div>
                        </div>
                        <button
                            className="chatbot-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="chatbot-messages">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
                            >
                                <div className="message-content">
                                    {message.text.split('\n').map((line, index) => (
                                        <p key={index}>{linkifyText(line)}</p>
                                    ))}
                                    <span className="message-time">
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message bot-message">
                                <div className="message-content">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    {messages.length <= 3 && (
                        <div className="quick-replies">
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    className="quick-reply-btn"
                                    onClick={() => handleQuickReply(reply)}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="chatbot-input">
                        <div className="input-container">
                            <textarea
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                rows="1"
                                className="message-input"
                            />
                            <button
                                className="send-button"
                                onClick={handleSendMessage}
                                disabled={inputMessage.trim() === ''}
                                aria-label="Send message"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22,2 15,22 11,13 2,9"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="chatbot-footer">
                        <p>Powered by Kelin Graphics System</p>
                    </div>
                </div>
            )}
        </>
    );
}