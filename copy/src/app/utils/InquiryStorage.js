// Simple localStorage-based inquiry storage
// In a real application, this would be replaced with API calls to a backend database

class InquiryStorage {
    static STORAGE_KEY = 'kelin_inquiries';

    static saveInquiry(inquiryData) {
        try {
            const inquiries = this.getAllInquiries();

            // Generate unique ID with timestamp + random number
            let newId;
            do {
                newId = Date.now() + Math.floor(Math.random() * 1000);
            } while (inquiries.some(inquiry => inquiry.id === newId));

            const newInquiry = {
                id: newId,
                ...inquiryData,
                submittedAt: new Date().toISOString(),
                status: 'new'
            };

            inquiries.unshift(newInquiry); // Add to beginning
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(inquiries));
            return newInquiry;
        } catch (error) {
            console.error('Error saving inquiry:', error);
            return null;
        }
    }

    static getAllInquiries() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error retrieving inquiries:', error);
            return [];
        }
    }

    static updateInquiryStatus(id, status) {
        try {
            const inquiries = this.getAllInquiries();
            const updatedInquiries = inquiries.map(inquiry =>
                inquiry.id === id ? { ...inquiry, status } : inquiry
            );
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedInquiries));
            return true;
        } catch (error) {
            console.error('Error updating inquiry status:', error);
            return false;
        }
    }

    static deleteInquiry(id) {
        try {
            const inquiries = this.getAllInquiries();
            const filteredInquiries = inquiries.filter(inquiry => inquiry.id !== id);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredInquiries));
            return true;
        } catch (error) {
            console.error('Error deleting inquiry:', error);
            return false;
        }
    }

    static getInquiryById(id) {
        try {
            const inquiries = this.getAllInquiries();
            return inquiries.find(inquiry => inquiry.id === id) || null;
        } catch (error) {
            console.error('Error retrieving inquiry:', error);
            return null;
        }
    }

    static getInquiriesByStatus(status) {
        try {
            const inquiries = this.getAllInquiries();
            return inquiries.filter(inquiry => inquiry.status === status);
        } catch (error) {
            console.error('Error filtering inquiries by status:', error);
            return [];
        }
    }

    static searchInquiries(searchTerm) {
        try {
            const inquiries = this.getAllInquiries();
            const term = searchTerm.toLowerCase();

            return inquiries.filter(inquiry =>
                inquiry.firstName?.toLowerCase().includes(term) ||
                inquiry.lastName?.toLowerCase().includes(term) ||
                inquiry.email?.toLowerCase().includes(term) ||
                inquiry.company?.toLowerCase().includes(term) ||
                inquiry.machine?.toLowerCase().includes(term) ||
                inquiry.message?.toLowerCase().includes(term)
            );
        } catch (error) {
            console.error('Error searching inquiries:', error);
            return [];
        }
    }

    static clearAllData() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            localStorage.removeItem('sample_data_added');
            return true;
        } catch (error) {
            console.error('Error clearing data:', error);
            return false;
        }
    }
}

export default InquiryStorage;