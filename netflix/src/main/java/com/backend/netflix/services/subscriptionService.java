package com.backend.netflix.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.netflix.beans.BillingStatus;
import com.backend.netflix.vo.UserSubscription;
import com.backend.netflix.repository.BillingStatusRepository;
import com.backend.netflix.repository.MovieRepository;
import com.backend.netflix.repository.UserSubscriptionRepository;
import com.backend.netflix.vo.Movie;
import com.backend.netflix.vo.PaidStatus;
import com.backend.netflix.vo.User;

@Service
public class subscriptionService {

	@Autowired
	private BillingStatusRepository billingStatusRepository;
	
	@Autowired
	private UserSubscriptionRepository userSubscriptionRepository;
	
//	for checking the subscribed user or not
	public UserSubscription subscribedDetails(int uid) {
	
		UserSubscription userSubscription=null;
		UserSubscription userSubsription=userSubscriptionRepository.findByUserId(uid);
//		boolean subscriptionPresent = false;
//		if(userSubsription!=null) {
			
			return userSubscription;
//		}	
	}
	


	public String subscribeUser(int uid, Date startDate, Date endDate, int moneyPaid) {
		// TODO Auto-generated method stub
		
		
		UserSubscription newSubscription= new UserSubscription();
		//uid,(moneyPaid/10),startDate,endDate
		newSubscription.setUserId(uid);
		newSubscription.setMonths(moneyPaid/10);
		java.sql.Date sDate = new java.sql.Date(startDate.getTime());
		newSubscription.setStartDate(sDate);
		java.sql.Date eDate = new java.sql.Date(endDate.getTime());
		newSubscription.setEndDate(eDate);
		
		
		BillingStatus billingStatus= new BillingStatus(PaidStatus.paid,0,uid);
		billingStatusRepository.save(billingStatus);
		
		userSubscriptionRepository.save(newSubscription);
		return "Subscribed thanks";
	}
	
	public UserSubscription findByUserId(int userId) {
		return userSubscriptionRepository.findByUserId(userId);
	}
	
	
	

}
