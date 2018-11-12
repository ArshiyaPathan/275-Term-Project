package com.backend.netflix.repository;


import java.util.Set;
import org.springframework.data.repository.CrudRepository;
import com.backend.netflix.beans.UserSubscription;


public interface UserSubscriptionRepository extends CrudRepository<UserSubscription, Integer> {

	Set<UserSubscription> findByUid(String Uid);
	


}